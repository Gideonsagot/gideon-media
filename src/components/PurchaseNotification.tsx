import { useState, useEffect } from 'react';
import { CheckCircle, X } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

interface Purchase {
  id: number;
  name: string;
  service: string;
  location: string;
  timeAgo: string;
}

const purchaseNotifications: Purchase[] = [
  { id: 1, name: "Sarah Johnson", service: "Digital Marketing Package", location: "New York", timeAgo: "2 minutes ago" },
  { id: 2, name: "Michael Chen", service: "Website Development", location: "California", timeAgo: "5 minutes ago" },
  { id: 3, name: "Emma Rodriguez", service: "SEO Optimization", location: "Texas", timeAgo: "8 minutes ago" },
  { id: 4, name: "David Thompson", service: "Social Media Management", location: "Florida", timeAgo: "12 minutes ago" },
  { id: 5, name: "Lisa Anderson", service: "Branding Package", location: "Illinois", timeAgo: "15 minutes ago" },
  { id: 6, name: "James Wilson", service: "E-commerce Development", location: "Washington", timeAgo: "18 minutes ago" },
  { id: 7, name: "Maria Garcia", service: "Content Marketing", location: "Arizona", timeAgo: "22 minutes ago" },
  { id: 8, name: "Robert Brown", service: "PPC Campaign", location: "Nevada", timeAgo: "25 minutes ago" },
  { id: 9, name: "Jennifer Lee", service: "Video Production", location: "Oregon", timeAgo: "28 minutes ago" },
  { id: 10, name: "Christopher Davis", service: "Graphic Design", location: "Colorado", timeAgo: "32 minutes ago" },
  { id: 11, name: "Amanda Martinez", service: "Email Marketing", location: "Georgia", timeAgo: "35 minutes ago" },
  { id: 12, name: "Daniel Kim", service: "Mobile App Development", location: "North Carolina", timeAgo: "38 minutes ago" },
  { id: 13, name: "Michelle White", service: "Analytics Setup", location: "Virginia", timeAgo: "42 minutes ago" },
  { id: 14, name: "Kevin Taylor", service: "WordPress Development", location: "Ohio", timeAgo: "45 minutes ago" },
  { id: 15, name: "Rachel Green", service: "Logo Design", location: "Michigan", timeAgo: "48 minutes ago" },
  { id: 16, name: "Steven Clark", service: "Shopify Store Setup", location: "Pennsylvania", timeAgo: "52 minutes ago" },
  { id: 17, name: "Nicole Adams", service: "Digital Strategy", location: "Tennessee", timeAgo: "55 minutes ago" },
  { id: 18, name: "Brian Miller", service: "Conversion Optimization", location: "Maryland", timeAgo: "58 minutes ago" },
  { id: 19, name: "Stephanie Moore", service: "Social Media Ads", location: "Wisconsin", timeAgo: "1 hour ago" },
  { id: 20, name: "Anthony Hall", service: "Website Redesign", location: "Minnesota", timeAgo: "1 hour ago" }
];

export function PurchaseNotification() {
  const [currentNotification, setCurrentNotification] = useState<Purchase | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [notificationIndex, setNotificationIndex] = useState(0);

  useEffect(() => {
    const showNotification = () => {
      const notification = purchaseNotifications[notificationIndex];
      setCurrentNotification(notification);
      setIsVisible(true);

      // Hide after 5 seconds
      setTimeout(() => {
        setIsVisible(false);
        setNotificationIndex((prev) => (prev + 1) % purchaseNotifications.length);
      }, 5000);
    };

    // Start after 5 seconds, then repeat every 15 seconds
    const initialTimer = setTimeout(() => {
      showNotification();
      
      const interval = setInterval(showNotification, 15000);
      return () => clearInterval(interval);
    }, 5000);

    return () => clearTimeout(initialTimer);
  }, [notificationIndex]);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible || !currentNotification) return null;

  return (
    <div className="fixed left-4 top-20 z-50 animate-fade-in">
      <Card className="w-80 p-4 shadow-lg border-green-200 bg-green-50 dark:bg-green-900/20 dark:border-green-800">
        <div className="flex items-start justify-between">
          <div className="flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5 flex-shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 mb-1">
                <span className="font-semibold text-green-800 dark:text-green-200 text-sm">
                  {currentNotification.name}
                </span>
                <span className="text-xs text-green-600 dark:text-green-400 bg-green-100 dark:bg-green-800/50 px-2 py-0.5 rounded-full">
                  {currentNotification.location}
                </span>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 mb-1">
                just purchased <span className="font-medium">{currentNotification.service}</span>
              </p>
              <span className="text-xs text-green-600 dark:text-green-400">
                {currentNotification.timeAgo}
              </span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="sm"
            onClick={handleClose}
            className="h-6 w-6 p-0 text-green-600 hover:text-green-800 dark:text-green-400 dark:hover:text-green-200"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>
      </Card>
    </div>
  );
}
import { useState } from 'react';
import { Star, X, ChevronUp, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useTranslation } from 'react-i18next';
import { useToast } from '@/components/ui/use-toast';

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
}

const quickReviews: Review[] = [
  {
    id: 1,
    name: "Alex M.",
    rating: 5,
    comment: "Amazing service! Highly recommend.",
    date: "2024-01-20"
  },
  {
    id: 2,
    name: "Sarah K.",
    rating: 5,
    comment: "Professional team, great results!",
    date: "2024-01-18"
  },
  {
    id: 3,
    name: "John D.",
    rating: 4,
    comment: "Very satisfied with the work done.",
    date: "2024-01-15"
  }
];

export function ReviewWidget() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [isExpanded, setIsExpanded] = useState(false);
  const [isWritingReview, setIsWritingReview] = useState(false);
  const [reviews, setReviews] = useState<Review[]>(quickReviews);
  const [newReview, setNewReview] = useState({
    name: '',
    rating: 5,
    comment: ''
  });

  const handleSubmitReview = () => {
    if (!newReview.name || !newReview.comment) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive"
      });
      return;
    }

    const review: Review = {
      id: reviews.length + 1,
      name: newReview.name,
      rating: newReview.rating,
      comment: newReview.comment,
      date: new Date().toISOString().split('T')[0]
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setIsWritingReview(false);
    
    toast({
      title: "Success",
      description: "Thank you for your review!",
    });
  };

  const renderStars = (rating: number, interactive = false, onRate?: (rating: number) => void) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        } ${interactive ? 'cursor-pointer hover:text-yellow-400' : ''}`}
        onClick={() => interactive && onRate && onRate(i + 1)}
      />
    ));
  };

  return (
    <div className="fixed right-4 top-1/2 -translate-y-1/2 z-40">
      <Card className={`w-80 shadow-lg transition-all duration-300 ${
        isExpanded ? 'h-96' : 'h-auto'
      }`}>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
              Reviews
            </CardTitle>
            <div className="flex gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </Button>
              {isExpanded && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setIsExpanded(false)}
                >
                  <X className="h-4 w-4" />
                </Button>
              )}
            </div>
          </div>
          
          {/* Overall Rating Display */}
          <div className="flex items-center gap-2 text-sm">
            <div className="flex gap-1">
              {renderStars(5)}
            </div>
            <span className="text-muted-foreground">4.9/5 ({reviews.length} reviews)</span>
          </div>
        </CardHeader>

        {isExpanded && (
          <CardContent className="flex-1 flex flex-col p-0">
            {!isWritingReview ? (
              <>
                {/* Reviews List */}
                <div className="flex-1 overflow-y-auto p-4 space-y-3 max-h-48">
                  {reviews.slice(0, 3).map((review) => (
                    <div key={review.id} className="border-b border-border pb-3 last:border-b-0">
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-medium text-sm">{review.name}</span>
                        <div className="flex gap-1">
                          {renderStars(review.rating)}
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground">{review.comment}</p>
                      <span className="text-xs text-muted-foreground">{review.date}</span>
                    </div>
                  ))}
                </div>

                {/* Write Review Button */}
                <div className="p-4 border-t">
                  <Button 
                    onClick={() => setIsWritingReview(true)}
                    className="w-full"
                  >
                    {t('reviews.writeReview')}
                  </Button>
                </div>
              </>
            ) : (
              /* Write Review Form */
              <div className="p-4 space-y-3">
                <Input
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                />
                
                <div>
                  <label className="block text-xs font-medium mb-1">Rating</label>
                  <div className="flex gap-1">
                    {renderStars(newReview.rating, true, (rating) => 
                      setNewReview({...newReview, rating})
                    )}
                  </div>
                </div>
                
                <Textarea
                  placeholder="Your Review"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={3}
                  className="text-sm"
                />
                
                <div className="flex gap-2">
                  <Button onClick={handleSubmitReview} className="flex-1">
                    Submit
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => setIsWritingReview(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        )}
      </Card>
    </div>
  );
}
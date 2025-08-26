import { useState } from 'react';
import { Star, ThumbsUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
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
  helpful: number;
}

const initialReviews: Review[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    rating: 5,
    comment: "Outstanding service! Gideon Media transformed our online presence and increased our sales by 200%. Highly recommend!",
    date: "2024-01-15",
    helpful: 12
  },
  {
    id: 2,
    name: "Mike Chen",
    rating: 5,
    comment: "Professional team that delivers results. Our website looks amazing and performs perfectly. Great communication throughout the project.",
    date: "2024-01-08",
    helpful: 8
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    rating: 4,
    comment: "Very satisfied with the digital marketing services. Saw significant improvement in our online visibility within weeks.",
    date: "2024-01-02",
    helpful: 6
  }
];

export function ReviewsSection() {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [reviews, setReviews] = useState<Review[]>(initialReviews);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
      date: new Date().toISOString().split('T')[0],
      helpful: 0
    };

    setReviews([review, ...reviews]);
    setNewReview({ name: '', rating: 5, comment: '' });
    setIsDialogOpen(false);
    
    toast({
      title: "Success",
      description: "Thank you for your review!"
    });
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">
            {t('reviews.title')}
          </h2>
          
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="mt-4">
                {t('reviews.writeReview')}
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{t('reviews.writeReview')}</DialogTitle>
              </DialogHeader>
              <div className="space-y-4">
                <Input
                  placeholder="Your Name"
                  value={newReview.name}
                  onChange={(e) => setNewReview({...newReview, name: e.target.value})}
                />
                
                <div>
                  <label className="block text-sm font-medium mb-2">Rating</label>
                  <div className="flex gap-1">
                    {Array.from({ length: 5 }, (_, i) => (
                      <button
                        key={i}
                        onClick={() => setNewReview({...newReview, rating: i + 1})}
                      >
                        <Star
                          className={`h-6 w-6 ${
                            i < newReview.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
                          }`}
                        />
                      </button>
                    ))}
                  </div>
                </div>
                
                <Textarea
                  placeholder="Your Review"
                  value={newReview.comment}
                  onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                  rows={4}
                />
                
                <Button onClick={handleSubmitReview} className="w-full">
                  Submit Review
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-semibold text-foreground">{review.name}</h3>
                    <p className="text-sm text-muted-foreground">{review.date}</p>
                  </div>
                  <div className="flex gap-1">
                    {renderStars(review.rating)}
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {review.comment}
                </p>
                
                <div className="flex items-center justify-between">
                  <Button variant="ghost" size="sm" className="text-xs">
                    <ThumbsUp className="h-3 w-3 mr-1" />
                    Helpful ({review.helpful})
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
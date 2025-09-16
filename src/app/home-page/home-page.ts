import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './home-page.html',
  styleUrl: './home-page.css'
})
export class HomePage implements OnInit, OnDestroy {
  // Use your real GIFs (filenames with spaces + .gif.gif)
  readonly heroImages = [
    'assets/image/Iphone video.gif.gif',
    'assets/image/Mac Video.gif.gif'
  ];
  readonly fallback = 'assets/image/IMG_1525.JPG';

  heroIndex = 0;
  private rotationId: any;

  // Small featured set (uses files that exist in your assets/image/)
  readonly featured = [
    { title: 'iPhone 16',        subtitle: 'Newest lineup',   img: 'assets/image/IMG_1525.JPG' },
    { title: 'MacBook',          subtitle: 'Pro & Air',       img: 'assets/image/IMG_1528.JPG' },
    { title: 'AirPods',          subtitle: 'Great sound',     img: 'assets/image/IMG_1535.JPG' },
    { title: 'iPad',             subtitle: 'Work & play',     img: 'assets/image/IMG_1536.JPG' },
  ];

  // quick badges under hero (pure UI)
  readonly perks = [
    { icon: '⚡', label: 'Fast shipping', sub: '24h processing' },
    { icon: '✅', label: '100% authentic', sub: 'Warranty included' },
    { icon: '💬', label: 'Support', sub: '7 days a week' },
    { icon: '↩️', label: 'Easy returns', sub: '7-day window' },
  ];

  // tiny testimonials (static)
  readonly testimonials = [
    { name: 'Sophea', quote: 'Great prices and super quick delivery!' },
    { name: 'Dara',   quote: 'Got my iPhone the next day. Excellent service.' },
  ];

  get heroImage(): string {
    return this.heroImages[this.heroIndex] || this.fallback;
  }

  onImgError(ev: Event) {
    (ev.target as HTMLImageElement).src = this.fallback;
  }

  ngOnInit(): void {
    // rotate the hero GIF every 6s
    this.rotationId = setInterval(() => {
      this.heroIndex = (this.heroIndex + 1) % this.heroImages.length;
    }, 6000);
  }

  ngOnDestroy(): void {
    clearInterval(this.rotationId);
  }

  onNewsletterSubmit(e: Event) {
    e.preventDefault();
    // purely visual; hook to backend later
    alert('Thanks! We’ll keep you posted.');
  }
}

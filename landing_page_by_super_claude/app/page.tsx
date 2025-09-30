import HeroSlider from '@/components/home/HeroSlider';
import CompanyIntro from '@/components/home/CompanyIntro';

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Slider Section */}
      <HeroSlider />

      {/* Company Introduction Section */}
      <CompanyIntro />
    </div>
  )
}
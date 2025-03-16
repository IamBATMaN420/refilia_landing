import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Droplet, Download, MapPin, Shield, ArrowRight, Leaf } from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Droplet className="h-6 w-6 text-primary" />
            <span className="text-xl font-bold">Refilia</span>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="#features" className="text-sm font-medium hover:text-primary">
              Features
            </Link>
            <Link href="#download" className="text-sm font-medium hover:text-primary">
              Download
            </Link>
            <Link href="#premium" className="text-sm font-medium hover:text-primary">
              Premium
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link
              href="https://team-deployers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-primary hidden md:block"
            >
              Visit Website
            </Link>
            <Link href="#premium">
              <Button>Get Premium</Button>
            </Link>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-12 md:py-24 lg:py-32 bg-gradient-to-b from-background to-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                  Find Free Water Refill Stations Across India
                </h1>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Refilia connects you with nearby water refill stations to reduce plastic waste and provide access to
                  clean drinking water.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link href="#download">
                    <Button className="w-full sm:w-auto" size="lg">
                      <Download className="mr-2 h-4 w-4" /> Download App
                    </Button>
                  </Link>
                  <Link href="https://team-deployers.vercel.app/" target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" className="w-full sm:w-auto" size="lg">
                      Learn More <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative w-full max-w-sm aspect-[4/5] overflow-hidden rounded-xl border bg-background shadow-xl">
                  <Image
                    src="/WhatsApp Image 2025-03-16 at 13.16.36_27ae037a.jpg"
                    alt="Refilia App Screenshot"
                    width={480}
                    height={600}
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">How Refilia Works</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Join the movement to reduce plastic waste and stay hydrated with clean water
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <MapPin className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Find Stations</h3>
                    <p className="text-sm text-muted-foreground">
                      Locate free water refill stations near you with our interactive map
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Droplet className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Refill Bottles</h3>
                    <p className="text-sm text-muted-foreground">
                      Bring your reusable bottle and refill with clean drinking water for free
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-2 text-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                      <Leaf className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Reduce Waste</h3>
                    <p className="text-sm text-muted-foreground">
                      Help reduce plastic pollution by avoiding single-use plastic bottles
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download" className="py-12 md:py-24 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="flex justify-center lg:order-last">
                <div className="relative w-full max-w-sm">
                  <Image
                    src="/WhatsApp Image 2025-03-16 at 13.16.36_27ae037a.jpg"
                    alt="Refilia App"
                    width={400}
                    height={600}
                    className="mx-auto"
                  />
                </div>
              </div>
              <div className="space-y-4">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Download the Refilia App
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl">
                  Get access to thousands of water refill stations across India. Available for Android and iOS.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="https://upload.app/download/refilia/com.wRefilia_18660994/d665993fe26173cf3d06a687055abf0946ab9ab7c9675e8e826f171129b9f6cb"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button size="lg" className="w-full sm:w-auto">
                      <Download className="mr-2 h-4 w-4" /> Download Now
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Premium Section */}
        <section id="premium" className="py-12 md:py-24 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Upgrade to Premium</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Get exclusive features and support our mission to reduce plastic waste
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2">
              <Card className="border-2 border-primary/20">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4 text-center">
                    <h3 className="text-2xl font-bold">Premium Features</h3>
                    <ul className="space-y-2 text-left">
                      <li className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        <span>Offline maps for remote areas</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        <span>Water quality information</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        <span>Add new refill stations</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        <span>Track your plastic savings</span>
                      </li>
                      <li className="flex items-center">
                        <Shield className="mr-2 h-4 w-4 text-primary" />
                        <span>Ad-free experience</span>
                      </li>
                    </ul>
                    <div className="pt-4">
                      <p className="text-3xl font-bold">
                        ₹2990<span className="text-sm font-normal text-muted-foreground">/year</span>
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card className="border-2 border-primary">
                <CardContent className="pt-6">
                  <div className="flex flex-col items-center space-y-4">
                    <h3 className="text-2xl font-bold text-center">Pay with PhonePe</h3>
                    <div className="flex justify-center">
                      <Image
                        src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-MOh2xSXMDrNBKEQCArAGi0xxniSSkR.png"
                        alt="PhonePe QR Code"
                        width={250}
                        height={300}
                        className="mx-auto"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground text-center">
                      Scan the QR code with your PhonePe app to make the payment
                    </p>
                    <Button className="w-full" size="lg">
                      Pay with PhonePe
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-12 md:py-24 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Join the Movement</h2>
                <p className="max-w-[900px] md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Help us reduce plastic waste and provide clean water access across India
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="#download">
                  <Button variant="secondary" size="lg">
                    <Download className="mr-2 h-4 w-4" /> Download App
                  </Button>
                </Link>
                <Link href="https://team-deployers.vercel.app/" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                    size="lg"
                  >
                    Visit Website <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t bg-muted">
        <div className="container flex flex-col gap-2 py-6 md:flex-row md:items-center md:justify-between md:py-8">
          <div className="flex items-center gap-2">
            <Droplet className="h-5 w-5 text-primary" />
            <p className="text-sm leading-loose text-muted-foreground md:text-left">
              © 2025 Refilia. All rights reserved.
            </p>
          </div>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Terms
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy
            </Link>
            <Link
              href="https://team-deployers.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:underline underline-offset-4"
            >
              Website
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}


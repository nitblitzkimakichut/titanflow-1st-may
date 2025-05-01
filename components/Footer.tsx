import Link from 'next/link';
import { Facebook, Instagram, Linkedin, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black/50 backdrop-blur-sm border-t border-emerald-900/20 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1">
            <Link href="/">
              <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-slate-300 to-emerald-200">
                TitanFlow AI
              </h3>
            </Link>
            <p className="mt-4 text-slate-400 text-sm">
              Transform your business with our cutting-edge AI solutions. Build, deploy, and scale with confidence.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-emerald-200 font-semibold mb-4">Navigation</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/free-training" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  Free Training
                </Link>
              </li>
              <li>
                <Link href="/free-training" className="text-slate-400 hover:text-emerald-400 transition-colors">
                  7 Day Trial
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-emerald-200 font-semibold mb-4">Social</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://www.instagram.com/sh1vns.titanflow/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram
                </a>
              </li>
              <li>
                <a 
                  href="https://www.facebook.com/profile.php?id=61573583548866" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </li>
              <li>
                <a 
                  href="https://www.linkedin.com/in/shivansh-bajaj-83b99622b" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
                >
                  <Linkedin className="w-4 h-4" />
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-emerald-200 font-semibold mb-4">Contact us</h4>
            <a 
              href="mailto:shivanshbajaj@titanflowai.com"
              className="text-slate-400 hover:text-emerald-400 transition-colors flex items-center gap-2"
            >
              <Mail className="w-4 h-4" />
              shivanshbajaj@titanflowai.com
            </a>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-emerald-900/20">
          <p className="text-center text-slate-500 text-sm">
            © {new Date().getFullYear()} TitanFlow AI. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
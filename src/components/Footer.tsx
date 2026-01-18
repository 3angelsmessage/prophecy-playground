import { motion } from "framer-motion";
import { Heart, BookOpen, Mail, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-12 h-12 rounded-full gradient-hero flex items-center justify-center">
                <span className="text-2xl">📖</span>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold">Prophecy Kids</h3>
                <p className="text-sm opacity-70">Learn Bible Prophecy</p>
              </div>
            </div>
            <p className="text-sm opacity-70 max-w-sm mb-4">
              Teaching children the amazing truths of Bible prophecy from the
              books of Daniel and Revelation in fun, engaging ways.
            </p>
            <div className="flex gap-3">
              {[
                { icon: Youtube, href: "#" },
                { icon: Facebook, href: "#" },
                { icon: Mail, href: "#" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors"
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-bold mb-4 flex items-center gap-2">
              <BookOpen size={16} />
              Learn
            </h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Daniel's Prophecies
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Revelation Symbols
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Prophecy Timeline
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Heavenly Sanctuary
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-display font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm opacity-70">
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Parent's Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Teacher Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Sabbath School Lessons
                </a>
              </li>
              <li>
                <a href="#" className="hover:opacity-100 transition-opacity">
                  Printable Activities
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-background/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-70">
            © {currentYear} Prophecy Kids. Sharing God's Word with love.
          </p>
          <p className="text-sm flex items-center gap-1 opacity-70">
            Made with <Heart size={14} className="text-prophecy-coral" /> for
            God's children
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import classNames from "classnames";

const navigation = [
  { name: "About Me", href: "/" },
  { name: "Skills", href: "/skills" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Contact", href: "/contact" },
];

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isAction, setIsAction] = useState("");

  // Lấy path hiện tại để mark đúng tab
  useEffect(() => {
    const currentPath = window.location.pathname;
    const matchedItem = navigation.find((item) => item.href === currentPath);
    if (matchedItem) setIsAction(matchedItem.name);
  }, []);

  const handleClick = (name: string) => {
    setIsAction(name);
    setMobileMenuOpen(false);
  };

  return (
    <header className="absolute inset-x-0 top-0 z-50 sticky bg-white shadow-sm">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-2 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <a href="/" className="flex items-center gap-2 -m-1.5 p-1.5">
            <span className="sr-only">Gia Bao Portfolio</span>
            <img
              alt=""
              src="https://www.premiumsvg.com/wimg_thumb/cute-cow-face-svg-vector.webp"
              className="h-10 w-10 rounded-full"
            />
            <span className="text-2xl font-bold text-gray-900 sm:text-1xl">
              Gia Bao Portfolio
            </span>
          </a>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-gray-900/10 hover:bg-gray-50"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>

        {/* Desktop menu */}
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => handleClick(item.name)}
              className={classNames(
                isAction === item.name
                  ? "text-indigo-600 border-b-2 border-indigo-600"
                  : "text-gray-900 hover:text-indigo-600",
                "text-sm font-semibold transition-all duration-150 pb-1"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      {/* Mobile menu */}
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                alt=""
                src="https://www.premiumsvg.com/wimg_thumb/cute-cow-face-svg-vector.webp"
                className="h-15 w-15 rounded-full"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={() => handleClick(item.name)}
                    className={classNames(
                      isAction === item.name
                        ? "bg-indigo-100 text-indigo-700"
                        : "text-gray-900 hover:bg-gray-50",
                      "block rounded-lg px-3 py-2 text-base font-semibold"
                    )}
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Navbar;

"use client"

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, ShoppingBag, User, Menu, LogOut, ChevronDown, Heart, X } from "lucide-react";
import { useAuth } from "../context/AuthContext";
import { useSaved } from "../context/SavedContext";

export default function Navbar() {
  const { user, isAuthenticated, logout } = useAuth();
  const { savedProducts } = useSaved();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <nav className="sticky top-0 z-50 bg-white backdrop-blur-md border-b border-gray-100">
      <div className="container-custom flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Gsons Logo"
            width={150}
            height={50}
            className="h-12 w-auto object-contain"
            priority
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-gray-700">
          <Link href="/" className="hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/about" className="hover:text-primary transition-colors">
            Our Story
          </Link>
          <Link href="/products" className="hover:text-primary transition-colors">
            All Products
          </Link>
          <Link href="/catalogues" className="hover:text-primary transition-colors">
            Catalogues
          </Link>
          {/* Saved Link */}
          {isAuthenticated && (
            <Link href="/saved" className="hover:text-primary transition-colors flex items-center space-x-1">
              <span>Saved</span>
              {savedProducts.length > 0 && (
                <span className="bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {savedProducts.length}
                </span>
              )}
            </Link>
          )}
          <Link href="/contact" className="hover:text-primary transition-colors">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="flex items-center ">
          {/* <button className="text-gray-600 hover:text-primary transition-colors">
            <Search className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-primary transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-primary transition-colors relative">
            <ShoppingBag className="w-5 h-5" />
            <span className="absolute -top-1 -right-1 bg-primary text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
              0
            </span>
          </button> */}
          {isAuthenticated ? (
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center space-x-2 text-gray-700 hover:text-primary transition-colors focus:outline-none"
              >
                <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center border border-gray-200">
                  <User className="w-5 h-5 text-gray-600" />
                </div>
                <span className="text-sm font-medium hidden sm:block">{user?.name || "User"}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
              </button>

              {/* Dropdown Menu */}
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-100 py-1 animation-fade-in z-50">
                  <div className="px-4 py-2 border-b border-gray-50 bg-gray-50/50">
                    <p className="text-xs text-gray-500">Signed in as</p>
                    <p className="text-sm font-semibold text-gray-900 truncate">{user?.email}</p>
                  </div>

                  {user?.role === 'admin' && (
                    <Link
                      href="/admin"
                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-red-50 hover:text-primary transition-colors"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      <User className="w-4 h-4 mr-2" />
                      Admin Dashboard
                    </Link>
                  )}

                  <button
                    onClick={() => {
                      logout();
                      setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 transition-colors"
                  >
                    <LogOut className="w-4 h-4 mr-2" />
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <Link
              href="/auth/login"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-bold text-white transition-all bg-primary rounded-full hover:bg-orange-600 shadow-lg hover:shadow-orange-500/30 hover:-translate-y-1"
            >
              Login
            </Link>
          )}
          <button
            className="md:hidden px-3 text-gray-600 hover:text-primary transition-colors focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-white border-b border-gray-100 shadow-lg py-6 px-4 flex flex-col space-y-4 animate-in slide-in-from-top-5">
          <Link
            href="/"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Our Story
          </Link>
          <Link
            href="/products"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            All Products
          </Link>
          <Link
            href="/catalogues"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Catalogues
          </Link>
          {isAuthenticated && (
            <Link
              href="/saved"
              className="text-gray-700 hover:text-primary font-medium transition-colors flex items-center justify-between"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <span>Saved</span>
              {savedProducts.length > 0 && (
                <span className="bg-primary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                  {savedProducts.length}
                </span>
              )}
            </Link>
          )}
          <Link
            href="/contact"
            className="text-gray-700 hover:text-primary font-medium transition-colors"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
}

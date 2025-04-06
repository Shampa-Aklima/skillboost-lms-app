import Image from 'next/image';
import React from 'react';

const ChurchCommunityBlog: React.FC = () => {
  return (
    <>
    <div className="w-full h-[412px] flex flex-col justify-center items-center text-3xl bg-[#F8F6FF] bg-cover bg-center text-black font-semibold relative">
        <div className="absolute inset-0 opacity-10">
          <Image src="/hero3.png" alt="pattern" fill className="object-cover" />
        </div>
        <span className="text-sm mb-2 block text-center opacity-80 relative z-10">
        Blog
        </span>
      </div>
 
    <div className="bg-gray-50 min-h-screen flex">
      {/* Main Content */}
      <div className="flex-1 p-8">
        {/* First Blog Post */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center text-gray-500 text-xs gap-4 mb-4">
            <span>23rd April 2023</span>
            <span>•</span>
            <span>Admin</span>
            <span>•</span>
            <span>0 Comments</span>
          </div>
          
          <h2 className="font-bold text-xl mb-2">We are praying for our community and platform.</h2>
          
          <p className="text-gray-600 text-sm mb-6">
            We have created many special events such as Themes, Polls, playlists, chats, videos, 
            groups, newsletters, fashion shows, sporting events, and even a weekend service! Come 
            check them out today...
          </p>
          
          <div className="mb-6">
            <Image 
              src="/api/placeholder" 
              alt="Community members working together" 
              width={600}
              height={300}
              className="w-full rounded-lg"
            />
          </div>
        </div>
        
        {/* Second Blog Post */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center text-gray-500 text-xs gap-4 mb-4">
            <span>22nd April 2023</span>
            <span>•</span>
            <span>Admin</span>
            <span>•</span>
            <span>0 Comments</span>
          </div>
          
          <h2 className="font-bold text-xl mb-2">Here at First Baptist Cape Coral we believe!</h2>
          
          <p className="text-gray-600 text-sm mb-6">
            We have created many special events such as Themes, Polls, playlists, chats, videos, 
            groups, newsletters, fashion shows, sporting events, and even a weekend service! Come 
            check them out today...
          </p>
        </div>
        
        {/* Third Blog Post */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="flex items-center text-gray-500 text-xs gap-4 mb-4">
            <span>21st April 2023</span>
            <span>•</span>
            <span>Admin</span>
            <span>•</span>
            <span>0 Comments</span>
          </div>
          
          <h2 className="font-bold text-xl mb-2">Delivering What Consumers Really Value?</h2>
          
          <p className="text-gray-600 text-sm mb-6">
            We have created many special events such as Themes, Polls, playlists, chats, videos, 
            groups, newsletters, fashion shows, sporting events, and even a weekend service! Come 
            check them out today...
          </p>
        </div>
      </div>
      
      {/* Sidebar */}
      <div className="w-80 p-4 bg-white">
        {/* Search */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-2">Search</h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full p-2 pl-4 bg-gray-100 rounded-lg text-sm"
            />
            <button className="absolute right-3 top-2.5 text-gray-400">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
            </button>
          </div>
        </div>
        
        {/* Categories */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-2">Categories</h3>
          <div className="space-y-2">
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm">News</span>
              <span className="text-xs text-gray-500">(9)</span>
            </div>
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm">Events</span>
              <span className="text-xs text-gray-500">(5)</span>
            </div>
            <div className="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-lg">
              <span className="text-sm">Community</span>
              <span className="text-xs text-gray-500">(7)</span>
            </div>
          </div>
        </div>
        
        {/* Recent Posts */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-4">Recent Post</h3>
          <div className="space-y-4">
            <div className="flex gap-3">
              <div className="w-16 h-16">
                <Image 
                  src="/api/placeholder" 
                  width={64}
                  height={64}
                  alt="Recent post thumbnail" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">April 23, 2023</span>
                <h4 className="text-xs font-medium">We are praying for our community and platform</h4>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-16 h-16">
                <Image 
                  src="/api/placeholder" 
                  width={64}
                  height={64}
                  alt="Recent post thumbnail" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">April 22, 2023</span>
                <h4 className="text-xs font-medium">Here at First Baptist Cape Coral we believe!</h4>
              </div>
            </div>
            
            <div className="flex gap-3">
              <div className="w-16 h-16">
                <Image 
                  src="/api/placeholder" 
                  width={64}
                  height={64}
                  alt="Recent post thumbnail" 
                  className="w-full h-full object-cover rounded"
                />
              </div>
              <div>
                <span className="text-xs text-gray-500">April 21, 2023</span>
                <h4 className="text-xs font-medium">Delivering What Consumers Really Value?</h4>
              </div>
            </div>
          </div>
        </div>
        
        {/* Photo Gallery */}
        <div className="mb-8">
          <h3 className="text-sm font-medium mb-4">Photo Gallery</h3>
          <div className="grid grid-cols-3 gap-2">
            <Image src="/api/placeholder/80/80" 
            alt="Gallery" 
            width={80}
            height={80}
            className="w-full h-20 object-cover rounded" />
            <Image src="/api/placeholder/80/80" 
            alt="Gallery" 
            width={80}
            height={80}
            className="w-full h-20 object-cover rounded" />
            <Image src="/api/placeholder/80/80" 
            alt="Gallery" 
            width={80}
            height={80}
            className="w-full h-20 object-cover rounded" />
            <Image src="/api/placeholder/80/80" 
            alt="Gallery" 
            width={80}
            height={80}     
            className="w-full h-20 object-cover rounded" />
            <Image src="/api/placeholder/80/80" 
            alt="Gallery" 
            width={80}
            height={80}
            className="w-full h-20 object-cover rounded" />
          </div>
        </div>
        
        {/* Popular Tags */}
        <div>
          <h3 className="text-sm font-medium mb-4">Popular Tag</h3>
          <div className="flex flex-wrap gap-2">
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">LOVE</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">BIBLE</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">WORSHIP</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">FAITH</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">DEVOTIONAL</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">PRAYER</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">INSPIRATION</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">CHURCH</span>
            <span className="text-xs bg-gray-100 px-3 py-1 rounded">GOD</span>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default ChurchCommunityBlog;
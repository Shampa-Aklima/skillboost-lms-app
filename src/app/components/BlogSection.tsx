import { Facebook, Instagram, Twitter } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export type BlogPost = {
  id: number
  title: string
  excerpt?: string
  date: {
    day: number
    month: string
  }
  image: string
  author?: {
    name: string
    avatar: string
  }
}

export interface BlogSectionProps {
  posts?: BlogPost[]
}

export default function BlogSection({ posts = [] }: BlogSectionProps) {
  if (posts.length === 0) {
    return (
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto border border-blue-100 rounded-lg p-6">
          <div className="text-center mb-8">
          <div className="w-1/3  bg-purple-100 text-purple-800 px-4 py-1 rounded-full text-sm font-medium">
          News & Blogs
              </div>
            <h2 className="text-3xl font-bold mt-1">Leatest News & Blog</h2>
          </div>
          <p className="text-center text-gray-500">No blog posts available at the moment.</p>
        </div>
      </section>
    )
  }

  const [featuredPost, ...secondaryPosts] = posts

  return (
    <section className="py-12 px-4">
      <div className="max-w-6xl mx-auto border border-blue-100 rounded-lg p-6">
        <div className="text-center mb-8">
          <span className="text-sm text-purple-600 font-medium">News & Blogs</span>
          <h2 className="text-3xl font-bold mt-1">Leatest News & Blog</h2>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Main featured post */}
          <div className="bg-white rounded-lg overflow-hidden">
            <div className="relative">
              <Image
                src={featuredPost.image || "/placeholder.svg"}
                alt={featuredPost.title}
                width={600}
                height={300}
                className="w-full h-[250px] object-cover"
              />
              <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                <div className="text-center">{featuredPost.date.day}</div>
                <div className="text-center">{featuredPost.date.month}</div>
              </div>
            </div>

            <div className="p-5">
              <h3 className="text-xl font-bold mb-3">{featuredPost.title}</h3>
              {featuredPost.excerpt && <p className="text-gray-600 text-sm mb-4">{featuredPost.excerpt}</p>}

              {featuredPost.author && (
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <Image
                      src={featuredPost.author.avatar || "/placeholder.svg"}
                      alt={featuredPost.author.name}
                      width={40}
                      height={40}
                      className="rounded-full"
                    />
                    <span className="text-sm font-medium">By: {featuredPost.author.name}</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Link href="#" className="text-gray-500 hover:text-purple-600">
                      <Facebook size={16} />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-purple-600">
                      <Instagram size={16} />
                    </Link>
                    <Link href="#" className="text-gray-500 hover:text-purple-600">
                      <Twitter size={16} />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Right side posts */}
          <div className="space-y-6">
            {secondaryPosts.map((post) => (
              <div key={post.id} className="bg-white rounded-lg overflow-hidden ">
                <div className="relative md:w-2/5">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.title}
                    width={300}
                    height={200}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-md text-sm font-medium">
                    <div className="text-center">{post.date.day}</div>
                    <div className="text-center">{post.date.month}</div>
                  </div>
                </div>

                <div className="p-4 md:w-3/5">
                  <h3 className="text-lg font-bold">{post.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


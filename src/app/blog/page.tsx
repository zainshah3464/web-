import React from "react";
import Column from "@/components/core/Column";
import Row from "@/components/core/Row";
import ConstrainedBox from "@/components/core/constrained-box";
import ResponsiveBox from "@/components/core/ResponsiveBox";
import Image from "next/image";

const BlogPage = () => {
  const blogSections = [
    
    {
      title: "PROJECTS",
      media: [

        {
          type: "video",
          src: "/projects/v1.mp4", // Add your video path here
          alt: "Project 1",
          title: "Project 1: Personal Assitant",
          description: "A Personal Assitant project showcasing my skills in C++.",
        },
      ],
    },
    
    {
      title: "RECENT PHOTOS",
      media: [
        {
          type: "image",
          src: "/recent/p1.jpg", // Add your image path here
          alt: "Logo 1",
          title: "With czn",
          description: "Just Chilling",
        },
        {
          type: "image",
          src: "/recent/p2.jpg", // Add your image path here
          alt: "Ad 1",
          title: "Going to Beach",
          description: "and Just flexing own car.",
        },
        {
          type: "image",
          src: "/recent/p3.jpg", // Add your image path here
          alt: "Logo 1",
          title: "Random",
          description: "Random.",
        },
        {
          type: "image",
          src: "/recent/p4.jpg", // Add your image path here
          alt: "Ad 1",
          title: "Friend Sister Wedding",
          description: "Zuraiz And Me.",
        },
        {
          type: "image",
          src: "/recent/p5.jpg", // Add your image path here
          alt: "Logo 1",
          title: "Friend Sister Wedding",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p6.jpg", // Add your image path here
          alt: "Ad 1",
          title: "Friend Sister Wedding",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p7.jpg", // Add your image path here
          alt: "Logo 1",
          title: "",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p8.jpg", // Add your image path here
          alt: "Ad 1",
          title: "Friend Sister Wedding",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p9.jpg", // Add your image path here
          alt: "Logo 1",
          title: "",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p10.jpg", // Add your image path here
          alt: "Ad 1",
          title: "",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p11.jpg", // Add your image path here
          alt: "Logo 1",
          title: "",
          description: "",
        },
        {
          type: "image",
          src: "/recent/p12.jpg", // Add your image path here
          alt: "Ad 1",
          title: "",
          description: "",
        },
      ],
    },
    {
      title: "RECENT VIDEOS",
      media: [
        {
          type: "video",
          src: "/recent/v1.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Aunty Home",
          description: "",
        },
        {
          type: "video",
          src: "/recent/v2.mp4", // Add your image path here
          alt: "Ad 1",
          title: "Uff",
          description: "",
        },
        {
          type: "video",
          src: "/recent/v3.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Crazy People in Park",
          description: "",
        },
        {
          type: "video",
          src: "/recent/v4.mp4", // Add your image path here
          alt: "Ad 1",
          title: "Decide to Go Picnic",
          description: "",
        },
        {
          type: "video",
          src: "/recent/v5.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Picnic",
          description: "",
        },
      ],
    },
    
    {
      title: "COLLEGE LIFE",
      media: [
        {
          type: "image",
          src: "/college/p1.jpg", // Add your image path here
          alt: "Funny Image 1",
          title: "Explaining My Project",
          description: "Practicing To Present My Project with Sir Imran. I Explaining Project to Computer teacher Sir Imran.",
        },
        {
          type: "image",
          src: "/college/p2.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "Group Photo",
          description: "On That Time The winner not announce",
        },
        {
          type: "image",
          src: "/college/p3.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "College Picnic",
          description: "",
        },
        {
          type: "image",
          src: "/college/p4.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "College Picnic",
          description: "",
        },
        {
          type: "image",
          src: "/college/p5.jpg", // Add your image path here
          alt: "Funny Image 1",
          title: "Victory Photo",
          description: "On that Time I Win the Compitition at third Postion steam exhibition 2025",
        },
        {
          type: "image",
          src: "/college/p7.jpeg", // Add your video path here
          alt: "Funny Video 1",
          title: "Our Project Team",
          description: "",
        },
        {
          type: "image",
          src: "/college/p8.jpeg", // Add your video path here
          alt: "Funny Video 1",
          title: "Flex",
          description: "",
        },
        {
          type: "image",
          src: "/college/p9.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "O My God",
          description: "",
        },
        {
          type: "image",
          src: "/college/p12.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "Steam Exhibition",
          description: "",
        },
        {
          type: "image",
          src: "/college/p13.jpeg", // Add your image path here
          alt: "Funny Image 1",
          title: "In Steam Exhibition",
          description: "",
        },
        {
          type: "image",
          src: "/college/p14.jpeg", // Add your video path here
          alt: "Funny Video 1",
          title: "In Steam Exhibition",
          description: "",
        },
        {
          type: "image",
          src: "/college/p15.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "College Picnic",
          description: "",
        },
        {
          type: "image",
          src: "/college/p16.jpeg", // Add your image path here
          alt: "Funny Image 1",
          title: "O Dam",
          description: "",
        },
        {
          type: "image",
          src: "/college/p17.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "College Picnic",
          description: "",
        },
        {
          type: "image",
          src: "/college/p18.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "College Picnic",
          description: "",
        },

        
      ],
    },
    {
      title: "OLD FILM SHOOTS",
      media: [
        {
          type: "image",
          src: "/oldshoot/p1.jpg", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "image",
          src: "/oldshoot/p2.jpg", // Add your image path here
          alt: "Ad 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "video",
          src: "/oldshoot/v1.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "video",
          src: "/oldshoot/v2.mp4", // Add your image path here
          alt: "Ad 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "video",
          src: "/oldshoot/v3.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "video",
          src: "/oldshoot/v4.mp4", // Add your image path here
          alt: "Ad 1",
          title: "Shooting of Horror Film",
          description: "",
        },
        {
          type: "video",
          src: "/oldshoot/v55.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "Hero Entry",
        },
        {
          type: "video",
          src: "/oldshoot/v6.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "wrong scene shoot",
        },
      
        {
          type: "video",
          src: "/oldshoot/v8.mp4", // Add your image path here
          alt: "Logo 1",
          title: "Shooting of Horror Film",
          description: "Intro scene",
        },
        {
          type: "video",
          src: "/oldshoot/v9.mkv", // Add your image path here
          alt: "Ad 1",
          title: "Shooting of Horror Film",
          description: "title intro",
        },
      ],
    },
    {
      title: "MY 3D RENDERS",
      media: [
        {
          type: "image",
          src: "/3drender/p1.png", // Add your image path here
          alt: "Funny Image 1",
          title: "Zombie City Street",
          description: "I Create it for my Zombie Project",
        },
        {
          type: "image",
          src: "/3drender/p2.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Main City In My Film",
          description: "Created for My film",
        },
        {
          type: "image",
          src: "/3drender/p3.png", // Add your video path here
          alt: "Funny Video 1",
          title: "In Learning Process",
          description: "I make this",
        },
        {
          type: "image",
          src: "/3drender/p4.png", // Add your video path here
          alt: "Funny Video 1",
          title: "In Learning Process",
          description: "I make this",
        },
        {
          type: "image",
          src: "/3drender/p5.png", // Add your image path here
          alt: "Funny Image 1",
          title: "In Learning Process",
          description: "i make this",
        },
        {
          type: "image",
          src: "/3drender/p6.png", // Add your video path here
          alt: "Funny Video 1",
          title: "main city",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p7.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Zombie City",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p8.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Just Create My scene",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p9.png", // Add your image path here
          alt: "Funny Image 1",
          title: "For Logo",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p10.png", // Add your video path here
          alt: "Funny Video 1",
          title: "For logo",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p11.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Create brigde scene",
          description: "and i also try to render fast",
        },
        {
          type: "image",
          src: "/3drender/p12.jpg", // Add your video path here
          alt: "Funny Video 1",
          title: "My O some Render",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p13.png", // Add your image path here
          alt: "Funny Image 1",
          title: "Zombie Scene",
          description: "I created it for my zombie film it scene for virus experiment on a person.",
        },
        {
          type: "image",
          src: "/3drender/p14.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Zombie Scene",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p15.png", // Add your video path here
          alt: "Funny Video 1",
          title: "Zombie Scene",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p16.png", // Add your video path here
          alt: "Funny Video 1",
          title: "My first Render",
          description: "",
        },
        {
          type: "image",
          src: "/3drender/p17.png", // Add your video path here
          alt: "Funny Video 1",
          title: "This is Great Scene I Create",
          description: "Amazing Looks Of BMW",
        },
        {
          type: "image",
          src: "/3drender/p18.png", // Add your image path here
          alt: "Funny Image 1",
          title: "This is Great Scene I Create",
          description: "Amazing Looks Of BMW",
        },
        {
          type: "image",
          src: "/3drender/p19.png", // Add your video path here
          alt: "Funny Video 1",
          title: "This is Great Scene I Create",
          description: "Amazing Looks Of BMW",
        },
        {
          type: "image",
          src: "/3drender/p20.png", // Add your video path here
          alt: "Funny Video 1",
          title: "This is Great Scene I Create",
          description: "Amazing Looks Of BMW",
        },
        {
          type: "image",
          src: "/3drender/p21.png", // Add your video path here
          alt: "Funny Video 1",
          title: "This is Great Scene I Create",
          description: "Amazing Looks Of BMW",
        },
        
      ],
    },
  ];
  

  return (
    <ResponsiveBox classNames="bg-[var(--bgColor)] dark:bg-[var(--bgColorDark)] min-h-screen">
      <ConstrainedBox classNames="px-4 py-8 pt-16">
        <Column classNames="text-center mb-16">
          <h1 className="text-5xl font-bold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
            Creative Hub - ZAIN'S Blog
          </h1>
          <p className="text-lg text-[var(--textColor)] dark:text-[var(--textColorLight)] mt-4">
            Welcome to my creative space where I share my work, projects, and fun moments.
          </p>
        </Column>

        {/* Blog Sections */}
        {blogSections.map((section, index) => (
          <div key={index} className="mt-16">
            <Row classNames="flex-col lg:flex-row justify-between items-center mb-12">
              <Column classNames="w-full lg:w-1/2 px-4 text-center lg:text-left">
                <h3 className="text-2xl font-semibold text-[var(--primaryColor)] dark:text-[var(--primaryColorDark)]">
                  {section.title}
                </h3>
              </Column>
            </Row>

            {/* Media (Images and Videos) */}
            <Row classNames="flex-wrap justify-center lg:justify-start gap-6">
              {section.media.map((item, idx) => (
                <Column key={idx} classNames="w-full sm:w-1/2 md:w-1/4 lg:w-1/8 px-4 text-center">
                  {item.type === "image" ? (
                    <div className="relative w-full h-40 mb-4">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    </div>
                  ) : item.type === "video" ? (
                    <div className="w-full mb-4">
                      <video width="100%" controls>
                        <source src={item.src} type="video/mp4" />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  ) : null}
                  <p className="mt-2 text-sm text-[var(--textColor)] dark:text-[var(--textColorLight)]">
                    <span className="font-semibold text-[var(--secondaryColor)]">
                      {item.title}:
                    </span>{" "}
                    <span className="italic">{item.description}</span>
                  </p>
                </Column>
              ))}
            </Row>
          </div>
        ))}

        {/* Go to Homepage Button */}
        <div className="text-center mt-16">
          <a
            href="/"
            className="app__outlined_btn text-xl px-6 py-2 rounded-lg border-[var(--primaryColor)] text-[var(--primaryColor)]"
          >
            Go to Homepage
          </a>
        </div>
      </ConstrainedBox>
    </ResponsiveBox>
  );
};

export default BlogPage;

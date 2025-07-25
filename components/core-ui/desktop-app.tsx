"use client";
import React, { useState } from "react";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";
import TwitterIcon from "@/lib/icons/twitter";
import { Tabs, TabsContent, TabsTrigger } from "../ui/tabs";
import { TabsList } from "@radix-ui/react-tabs";
import { Icon, SquarePlus, UserPlus } from "lucide-react";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import { Input } from "../ui/input";
import { Separator } from "../ui/separator";
import GithubIcon from "@/lib/icons/github";
import userButton from "@/features/auth/components/user-button";
import UserButton from "@/features/auth/components/user-button";

const DesktopApp = () => {
  const [activeTab, setActiveTab] = useState<"createRoom" | "joinRoom">(
    "createRoom"
  );

  return (
    <main className="relative flex gap-2 items-center justify-center p-2 h-screen w-full">
      {/* sidebar */}
      <aside className="flex flex-col gap-3 w-full max-w-[260px] min-w-[220px] h-full bg-transparent rounded-2xl overflow-hidden border-primary/10">
        {/* //Logo */}
        <div className="flex items-center justify-between gap-2 p-1 border border-primary/10 bg-secondary rounded-2xl">
          <button
            className="flex items-center
            justify-center gap-1 p-1 cursor-pointer hover:bg-foreground/5 transition-all duration-300 rounded-xl"
          >
            <Image
              src={logo}
              alt="logo"
              className="size-8"
              priority
              loading="eager"
            />
            <h1 className="tracking-wider font-bold text-xl antialiased">
              Coreco
            </h1>
          </button>
          <Link
            href="https://x.com/intent/tweet?text=Check%20out%20Gradii%20-%20A%20beautiful%20open-source%20gradient%20generator%20tool%0A%0Ahttps%3A%2F%2Fgithub.com%2Fkeshav-exe%2Fwallpaper-app"
            target="_blank"
          >
            <Button variant="ghost" size="icon">
              <TwitterIcon className="size-4 " />
            </Button>
          </Link>
        </div>
        <Separator className="my-2" />
        {/* //room area */}
        <div>
          <Tabs
          defaultValue={activeTab}
          onValueChange={(value) =>
            setActiveTab(value as "createRoom" | "joinRoom")
          }
          className="flex flex-col items-center w-full"
        >
          <TabsList className="w-full flex items-center gap-1">
            <div className="flex items-center gap-1 w-full">
              {[
                { id: "createRoom", icon: UserPlus },
                { id: "joinRoom", icon: SquarePlus },
              ].map(({ id, icon: Icon }) => (
                <TabsTrigger
                  key={id}
                  value={id}
                  className={cn(
                    "flex-1 relative w-full px-4 py-3 cursor-pointer hover:bg-foreground/25 transition-all duration-300 rounded-2xl text-foreground border border-primary/10 flex items-center gap-2"
                  )}
                >
                  <Icon className="size-4" />
                  <span className="text-xs tracking-tight capitalize">
                    {id}
                  </span>
                </TabsTrigger>
              ))}
            </div>
          </TabsList>
        </Tabs>
        {/* controls */}
        <section className="w-full mt-2 bg-secondary rounded-2xl flex flex-col no-scrollbar overflow-hidden border border-primary/10 relative">
          <div className="flex flex-col overflow-y-auto justify-between no-scrollbar relative gap-2 p-2">
            <motion.div
              key={activeTab}
              className="flex flex-col gap-8"
              initial={{ y: 10 }}
              animate={{ y: 0 }}
              exit={{ y: -10 }}
              transition={{
                duration: 0.2,
                type: "spring",
                damping: 10,
                stiffness: 100,
                ease: "cubic-bezier(0.45, 0.05, 0.55, 0.95)" as any,
              }}
            >
              {activeTab === "createRoom" && (
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <Input
                      className={cn("resize-none whitespace-pre-wrap")}
                      placeholder="Enter User name"
                    />
                  </div>
                  <div>
                    <Button className="" variant="accent">
                      Create Room
                    </Button>
                  </div>
                </div>
              )}
              {activeTab === "joinRoom" && (
                <div className="flex flex-col gap-4 w-full">
                  <div className="flex flex-col gap-2 w-full">
                    <Input
                      className={cn("resize-none whitespace-pre-wrap")}
                      placeholder="Room ID to join"
                    />
                  </div>
                  <div>
                    <Button className="" variant="accent">
                      Join
                    </Button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </section>
        </div>
        <Separator className="my-2" />

        {/* Available room */}
        <div className="w-full h-full bg-secondary rounded-2xl flex flex-col no-scrollbar overflow-hidden border border-primary/10 relative">
          <div className="flex flex-1 owerflow-y-auto p-2">
            <h3>Available Room</h3>
          </div>
        </div>
        <div className="flex w-full gap-2 p-2 bg-secondary sticky bottom-0 border rounded-2xl border-primary/10 z-10">
          <Button
          className="flex items-center w-full"
              variant="accent">
                <GithubIcon className="size-4" />
              <span className="text-sm">Github Integration</span>
          </Button>
          <UserButton />
        </div>
      </aside>

      {/* Main Editor Area */}
      {/* <div className="w-full h-full bg-amber-400 rounded-2xl flex flex-col no-scrollbar overflow-hidden border border-primary/10 relative">

      </div> */}
      <div className="w-full bg-secondary rounded-2xl flex flex-col no-scrollbar overflow-hidden h-full  border border-primary/10 relative">
        <div className="flex flex-1 items-center justify-center h-full w-full">
          <div className="text-center">
            <Image
              src={logo}
              alt={logo}
              className="size-16 mx-auto mb-2"
            ></Image>
            <h2 className="text-xl font-semibold text-foreground mb-2">
              Welcome to Coreco
            </h2>
            <p className="text-muted-foreground mb-4">
              A Collaborative Code Editor
            </p>
            <p className="text-muted-foreground mb-6">
              Create a new room or join an existing one to start collaborating
            </p>
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">
                • Real-time collaborative editing
              </p>
              <p className="text-sm text-muted-foreground">
                • GitHub integration for code pulling
              </p>
              <p className="text-sm text-muted-foreground">
                • Multi-language support
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default DesktopApp;

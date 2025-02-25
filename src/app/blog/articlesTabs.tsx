"use client"
import * as React from "react"

import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuList,
    NavigationMenuLink
  } from "@/components/ui/navigation-menu"
import { ChevronRight } from "lucide-react"
import {
  CardContent,
  Card,
  CardHeader,
} from "@/components/ui/card"
import {ArticlesCard} from "./articlesCard"
import TabNavItem from "../routes/tabItem"
import { useState } from "react"
import Image from "next/image"
import { getMyDay, getMyMonth } from "../services/success"
import parse from 'html-react-parser'

type ArticlesTabsProps = {
  articles: {
    id: number;
    link: string | null;
    createdAt: Date;
    updatedAt: Date;
    image: string | null;
    title: string;
    content: string;
    writer: string;
  }[];
  email: string;
};

export function ArticlesTabs(
    {articles, email}: ArticlesTabsProps){
    
    const [activeTab, setActiveTab] = useState("tab1")
    const [contents, setContent] = useState({
      id: articles["0"].id, 
      title: articles["0"].title, 
      content: articles["0"].content, 
      writer: articles["0"].writer, 
      image: articles["0"].image,
      updatedAt: articles["0"].updatedAt,
      createdAt: articles["0"].createdAt,
      link: articles["0"].link,
    })

    const handleTab1 = () => {
        setActiveTab("tab1")
    }
    function getContent(content: {
      id: number, 
      title: string, 
      content: string, 
      writer: string, 
      image: string | null,
      link: string | null,
      updatedAt: Date,
      createdAt: Date,
    }, email:string){
        setContent(content)
        handleTab1()
    }
    const allArticles = Object.values(articles);
    function path(image: string | null){
      if(image !== null){
      return image} else{return ''}
    }
    function ref(link: string){
      return '#'+ link
    }
    
    return(
        <div>
        <div className="sm:p-6 border-t">
        <div className="sm:float-right hidden sm:block sm:-mx-6">
      <Card className="w-[320px] border-none bg-muted p-2">
      <CardHeader>
        <div className="text-2xl font-bold tracking-tight leading-6">Recommended Articles</div>
      </CardHeader>
      <div className="scroll-y-blog bg-white py-4">
        {
          allArticles.map((article: { id: number; title: string; link: string | null; content: string; writer: string, image: string | null, updatedAt: Date, createdAt: Date}
          ) => (
            <CardContent className="" key={article.id}>
            <div className="mt-1 pb-4 border-b" 
            onClick={() => getContent(article, email)}>
              <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} 
              title={<div>
                <div className="relative h-36 sm:w-92">
                <Image
                    alt="article image"
                    src={path(article.image)}
                    fill
                    unoptimized
                    className="object-cover"/>
                  </div>
                  <Link href={ref(article.title)}>
                <div className="text-lg font-bold tracking-tight mt-4 leading-5 text-dark pointer blog capitalize">
              {article.title}</div></Link>
              <div className="line-clamp-4 text-sm leading-4 mt-2">
              {parse(article.content)}
              </div></div>}/>
              </div>
              </CardContent>
          ))
        }</div>
            <p className="text-sm p-6">
                Leave us a message or comment on any of the articles we have and lets keep the discussion flowing
            </p>
    </Card>
    </div>
      <NavigationMenu className="hidden">
    <NavigationMenuList>
      <NavigationMenuItem>
      <Link href="/" legacyBehavior passHref className="page-link">
            <NavigationMenuLink>
              Home
            </NavigationMenuLink>
          </Link>
                <div className="flex flex-row">
                <ChevronRight width={15} height={15} className="pt-1"/> Blog</div>
    </NavigationMenuItem>
    </NavigationMenuList></NavigationMenu>
    <div className="sm:py-4 rounded-xl sm:w-3/4">
    <ArticlesCard 
              id={contents.id}
              title={contents.title}
              content={contents.content}
              image={contents.image}
              link={contents.link}
              writer={contents.writer}
              updatedAt={contents.updatedAt} 
              createdAt={contents.createdAt} 
              email={email}   />
    </div>
    <div className="sm:hidden mt-12">
      <Card className="border-none">
      <CardHeader>
        <div className="text-3xl font-bold tracking-tight leading-6">Recommended Articles</div>
      </CardHeader>
      <div className="scroll-y-blog bg-white py-4">
        {
          allArticles.map((article: { id: number; title: string; content: string; writer: string, link: string | null, image: string | null, updatedAt: Date, createdAt: Date}
          ) => (
            <CardContent className="" key={article.id}>
            <div className="mt-1 pb-4" 
            onClick={() => getContent(article, email)}>
              <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} 
              title={<div>
                <div className="relative h-36 sm:w-92">
                <Image
                    alt="article image"
                    src={path(article.image)}
                    fill
                    unoptimized
                    className="object-cover"/>
                  </div>
                  <Link href={ref(article.title)}>
                <div className="text-3xl font-bold tracking-tight mt-4 leading-7 text-dark pointer blog capitalize">
              {article.title}</div></Link>
              <div className="line-clamp-4 text-md leading-5 mt-2">
              {parse(article.content)}
              </div>
              <div className="py-8 border-b">
              <p className="desc float-right"> {
              getMyDay(article.updatedAt.getDay())}, {getMyMonth(article.updatedAt.getMonth())} {article.updatedAt.getDate()}, {article.updatedAt.getFullYear()
              }</p>
              </div>
              </div>
            }/>
              </div>
              </CardContent>
          ))
        }</div>
            <p className="desc p-6">
                Leave us a message or comment on any of the articles we have and lets keep the discussion flowing
            </p>
    </Card>
    </div>
        </div>
        </div>
    )
}
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

export default function ArticlesTabs(
    articles: { articles_table:
      {
        id: number,
        link: string | null,
        createdAt: Date,
        updatedAt: Date,
        image: string | null,
        title:string, 
        content: string, 
        writer: string}, 
        votes_table: {
          id: number,
          email: string,
          article: number,
          vote: number | null
        }}[]){
    
    const [activeTab, setActiveTab] = useState("tab1")
    const [contents, setContent] = useState({
      articles_table:{
      id: articles["0"].articles_table.id, 
      title: articles["0"].articles_table.title, 
      content: articles["0"].articles_table.content, 
      writer: articles["0"].articles_table.writer, 
      image: articles["0"].articles_table.image,
      updatedAt: articles["0"].articles_table.updatedAt,
    },
      votes_table: {}
    })

    const handleTab1 = () => {
        setActiveTab("tab1")
    }
    function getContent(content: {articles_table:{ 
      id: number, 
      title: string, 
      content: string, 
      writer: string, 
      image: string | null,
      updatedAt: Date,
    }, votes_table: {
      id: number,
      email:string,
      article: number,
      vote: number | null
    }}){
        setContent(content)
        handleTab1()
    }
    const allArticles = Object.values(articles);
    const justArticles = Object.values(allArticles.map(articles=>articles.articles_table))
    function path(image: string | null){
      return '/articles/'+ image
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
          allArticles.map((article: {
            articles_table: { id: number; title: string; content: string; writer: string, image: string | null, updatedAt: Date},
            votes_table: {id: number, vote: number | null, email: string, article: number}
          }) => (
            <CardContent className="" key={article.articles_table.id}>
            <div className="mt-1 pb-4 border-b" 
            onClick={() => getContent(article)}>
              <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} 
              title={<div>
                <div className="relative h-36 sm:w-92">
                <Image
                    aria-hidden
                    alt="article image"
                    src={path(article.articles_table.image)}
                    fill
                    className="object-cover"/>
                  </div>
                  <Link href={ref(article.articles_table.title)}>
                <div className="text-lg font-bold tracking-tight mt-4 leading-5 text-dark pointer blog">
              {article.articles_table.title}</div></Link>
              <div className="line-clamp-4 text-sm leading-4 mt-2">
              {article.articles_table.content}
              </div></div>}/>
              </div>
              </CardContent>
          ))
        }</div>
            <p className="desc p-6">
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
      id={contents.articles_table.id} 
      title={contents.articles_table.title} 
      content={contents.articles_table.content} 
      image={contents.articles_table.image} 
      link={null} 
      writer={contents.articles_table.writer} 
      updatedAt={contents.articles_table.updatedAt}
      votes={contents.votes_table}
    />
    </div>
    <div className="sm:hidden mt-12">
      <Card className="border-none">
      <CardHeader>
        <div className="text-3xl font-bold tracking-tight leading-6">Recommended Articles</div>
      </CardHeader>
      <div className="scroll-y-blog bg-white py-4">
        {
          allArticles.map((article: {
            articles_table: { id: number; title: string; content: string; writer: string, image: string | null, updatedAt: Date},
            votes_table: {id: number, vote: number | null, email: string, article: number}
          }) => (
            <CardContent className="" key={article.articles_table.id}>
            <div className="mt-1 pb-4" 
            onClick={() => getContent(article)}>
              <TabNavItem id="tab1" activeTab={activeTab} setActiveTab={setActiveTab} 
              title={<div>
                <div className="relative h-36 sm:w-92">
                <Image
                    aria-hidden
                    alt="article image"
                    src={path(article.articles_table.image)}
                    fill
                    className="object-cover"/>
                  </div>
                  <Link href={ref(article.articles_table.title)}>
                <div className="text-3xl font-bold tracking-tight mt-4 leading-7 text-dark pointer blog">
              {article.articles_table.title}</div></Link>
              <div className="line-clamp-4 text-md leading-5 mt-2">
              {article.articles_table.content}
              </div>
              <div className="py-8 border-b">
              <p className="desc float-right"> {
              getMyDay(article.articles_table.updatedAt.getDay())}, {getMyMonth(article.articles_table.updatedAt.getMonth())} {article.articles_table.updatedAt.getDate()}, {article.articles_table.updatedAt.getFullYear()
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
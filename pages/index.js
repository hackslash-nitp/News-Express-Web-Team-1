import Head from 'next/head'
import Image from 'next/image'
import Card from '../Components/Card'
import styles from '../styles/Home.module.css'
import DateTime from '../components/DateTime'
import TrendingCard1 from '../Components/trendingCard1'
import TrendingCard2 from '../Components/trendingCard2'

export default function Home() {
  return (
    <div className={styles.Container}>
      <div className={styles.heading}>
        <h1 className={styles.h1News}>News Express</h1>
        <DateTime />
      </div>
      
    <h2 className={styles.hotTopicsh2}>Trending</h2>  
    <div className={styles.trending}>
    <TrendingCard1 
      title='Card 1'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.Consequat eiusmod duis est aliquip sunt eiusmod.Dolor qui eu laboris Lorem aliquip laboris pariatur esse.Excepteur id consequat esse elit excepteur ex.Commodo et aliqua non cillum elit excepteur amet.Veniam nostrud occaecat tempor incididunt veniam culpa laborum magna officia.'
      />

    <TrendingCard2
      title='Card 1'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />
    </div>
    
    <h2 className={styles.hotTopicsh2}>Hot Topics</h2>
    <div className={styles.hotTopics}>
      <Card 
      title='Card 1'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />

      <Card 
      title='Card 2'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />
      
      <Card 
      title='Card 3'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />

      <Card 
      title='Card 4'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />

      <Card 
      title='Card 4'
      imageUrl='cardimages/sportsCard.jpg'
      body='Quis ut voluptate labore do sint non deserunt exercitation commodo voluptate.'
      />

    </div>
    </div>
  )
}

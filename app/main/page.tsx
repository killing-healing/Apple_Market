"use client"

import { Card, CardContent, CardMedia, Grid, Typography, styled } from "@mui/material";
import { PostCardProps } from "../interface/interface";
import { badgeBorderRadius, shadow } from "../styles/theme";

const MainContainer = styled(Grid) ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minHeight: '500px',
  width: '100vw',
  padding: '100px 50px'
})

const PostCardContainer = styled(Card) ({
  width: '350px',
  height: '380px',
  borderRadius: `${badgeBorderRadius}`,
  boxShadow: `${shadow}`
})

const StyledCardContent = styled(CardContent) ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'flex-start',
})

const StyledTypography = styled(Typography) ({
  marginBottom: '10px'
})

const Main = () => {

  const posts = [
    { image: '/iphone.jpg', productName: '아이폰13 Pro', location: '서울 강남구', price: '1,300,000' },
    { image: '/iphone.jpg', productName: '아이폰13 Pro', location: '서울 강남구', price: '1,300,000' },
    { image: '/iphone.jpg', productName: '아이폰13 Pro', location: '서울 강남구', price: '1,300,000' },
    { image: '/galaxy.jpg', productName: '갤럭시13', location: '서울 노원구', price: '1,200,000' },
    { image: '/galaxy.jpg', productName: '갤럭시13', location: '서울 노원구', price: '1,200,000' },
    { image: '/galaxy.jpg', productName: '갤럭시13', location: '서울 노원구', price: '1,200,000' },
  ]

  return (
    <MainContainer container spacing={5}>
      {posts.map((post, index) => (
        <Grid item key={index}>
          <PostCard {...post} />
        </Grid>
      ))}
    </MainContainer>
  )
}

const PostCard: React.FC<PostCardProps> = ({ image, productName, location, price }) => (
  <PostCardContainer>
    <CardMedia
      component="img"
      alt={productName}
      height="250"
      image={image}
      style={{ cursor: 'pointer', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)' }}
    />
    <StyledCardContent>
      <StyledTypography variant="h6">
        {productName}
      </StyledTypography>
      <StyledTypography variant="body2" color="textSecondary">
        {location}
      </StyledTypography>
      <StyledTypography variant="body1">
        ₩{price}
      </StyledTypography>
    </StyledCardContent>
  </PostCardContainer>
)

export default Main
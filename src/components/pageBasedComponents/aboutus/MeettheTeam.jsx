'use client'
import React from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import Image from 'next/image'
import meettheteam from '@/constants/Aboutus/meettheteam'
import { Grid } from '@mui/material'
import { Container } from '@mui/material'
import { Stack } from '@mui/system'
import Link from 'next/link'
import { useRef, useEffect } from 'react'
import Aboutusimagepathway from '@/constants/ImagePaths/Aboutus/Aboutusimagepathway'
import teamperson from '@/constants/Aboutus/teamperson'
import { useState } from 'react'

const MeettheTeam = () => {
  const secstyle = {
    textDecoration: 'none',
  }
  const popup = useRef()
  const pagecontainer = useRef()
  const scrollPosition = useRef(0)
  const popUpContentRef = useRef()
  const leftclickRef = useRef()
  // leftclickRef.current.classList.add('leftclick')
  // console.log(leftclickRef.current.className)
  //   leftclickRef.current.className.addEventListener("click", function () {
  //   console.log("The button has been clicked!");
  // })
  function handleLinkClose(e) {
    if (
      popUpContentRef.current &&
      !popUpContentRef.current.contains(e.target)
    ) {
      document.body.style.overflow = 'scroll'
      popup.current.classList.remove('display')
      window.scrollTo(0, scrollPosition.current)
    }
  }

  function handleClosebutton() {
    document.body.style.overflow = 'scroll'
    popup.current.classList.remove('display')
    window.scrollTo(0, scrollPosition.current)
  }
  const [content, setContent] = useState(teamperson[0])
  const handleLinkClick = (id) => {
    const matchingItem = teamperson.find(
      (item) => item.id.toString() === id.toString()
    )

    setContent(matchingItem)

    scrollPosition.current = window.scrollY
    document.body.style.overflow = 'hidden'
    popup.current.classList.add('display')
  }
  return (
    <Container
      sx={{ overflowX: 'hidden', marginTop: '100px' }}
      ref={pagecontainer}
      className="topcontainer"
      id="topcontainer"
    >
      <Typography
        sx={{ textAlign: 'center', fontSize: '44px', fontWeight: 'bold' }}
      >
        Meet the team
      </Typography>

      <Grid
        sx={{ width: '100%', marginTop: '50px' }}
        container
        justifyContent="center"
        alignItems="center"
      >
        {meettheteam.map((item, i) => (
          <Grid
            sx={{
              marginBottom: '40px',
              borderLeft: item.id % 2 == 0 ? '1px solid #707070' : '',
            }}
            item
            xs={12}
            lg={6}
          >
            <Link
              ref={leftclickRef}
              href=""
              style={secstyle}
              onClick={() => handleLinkClick(item.id)}
            >
              <Stack flexDirection="column" gap={1} sx={{ width: '100%' }}>
                <Image
                  style={{
                    width: '90%',
                    height: 'auto',
                    alignSelf: 'center',
                    paddingBottom: '20px',
                    borderBottom: '1px solid #707070',
                  }}
                  src={item.img}
                  alt="new"
                />

                <Box sx={{ margin: '-120px 45px 0' }}>
                  <Typography
                    sx={{
                      fontSize: '36px',
                      fontWeight: '600',
                      color: 'white',
                      cursor: 'pointer',
                    }}
                  >
                    {item.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: '24px', color: 'white', cursor: 'pointer' }}
                  >
                    {item.designation}
                  </Typography>
                </Box>
              </Stack>
            </Link>
          </Grid>
        ))}
      </Grid>
      <Box
        onClick={handleLinkClose}
        ref={popup}
        className="poppage  poppage--fullpage--end "
      >
        <Box ref={popUpContentRef} className="midpage">
          <Box className="finalpage">
            <Container>
              <Grid sx={{ width: '100%' }} container alignItems="center">
                <Grid item xs={12} lg={2}>
                  <Image
                    onClick={handleClosebutton}
                    style={{
                      cursor: 'pointer',
                      height: 'auto',
                      width: '50px',
                    }}
                    src={Aboutusimagepathway.close}
                  />
                </Grid>
                <Grid justifyContent="center" item xs={12} lg={8}>
                  <Typography sx={{ fontSize: '44px', textAlign: 'center' }}>
                    {content.person[0].title}
                  </Typography>
                  <Typography sx={{ fontSize: '36px', textAlign: 'center' }}>
                    {content.person[0].designation}
                  </Typography>
                  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Image src={Aboutusimagepathway.linkedin} />
                  </Box>
                </Grid>
                <Grid item xs={12} lg={2}></Grid>
              </Grid>

              <Grid
                sx={{
                  padding: '20px 0 20px 0',
                  borderTop: '1px solid #707070',
                  borderBottom: '1px solid #707070',
                  marginTop: '80px',
                }}
                container
                justifyContent="center"
                alignItems="center"
              >
                <Grid
                  sx={{ borderRight: '1px solid #707070' }}
                  item
                  xs={12}
                  lg={6}
                >
                  <Stack
                    flexDirection="row"
                    justifyContent="center"
                    sx={{ width: '100%' }}
                  >
                    <Image
                      style={{
                        height: 'auto',
                        width: '90%',
                      }}
                      src={Aboutusimagepathway.teamdemo}
                    />
                  </Stack>
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Stack sx={{ paddingLeft: '25px' }}>
                    <Typography sx={{ fontSize: '24px' }}>
                      {content.person[0].content}
                    </Typography>
                    <Typography sx={{ fontSize: '20px' }}>
                      {content.person[0].description}
                    </Typography>
                  </Stack>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </Box>
      </Box>
    </Container>
  )
}

export default MeettheTeam
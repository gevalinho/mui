
import { AppBar, Toolbar, Typography, styled, Badge, Avatar, Menu, MenuItem } from '@mui/material'
import InputBase from '@mui/material/InputBase';
import React, { useState } from 'react'
import Widgets from '@mui/icons-material/Widgets';
import { Mail, Notifications } from '@mui/icons-material';


export const Navbar = () => {

  const StyledToolbar = styled(Toolbar)({
    display:'flex',
    justifyContent:'space-between'
  })

  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%'
  }))

  const Icons = styled('Box')(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
      display: 'flex'
    }
  }))

  const UserBox = styled('Box')(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]:{
      display: 'none'
    }
  }))

  const [open, setOpen] = useState(false)


  return (
    <AppBar position='sticky'>
      <StyledToolbar>
        <Typography variant='h6' sx={{display: {xs: 'none', sm: 'block'}}}>Navbar</Typography>
        <Widgets sx={{display: {xs: 'block', sm: 'none'}}}/>
        <Search><InputBase placeholder='Search ..'/> </Search>
        <Icons><Badge badgeContent={4} color="error">
        <Mail/>
        </Badge>
        <Badge badgeContent={4} color="error">
        <Notifications/>
        </Badge>
        <Badge badgeContent={4} color="error">
        <Avatar sx={{width: 30, height:30}} alt="Remy Sharp" src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA3gMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAEBQMGAQIHAAj/xABGEAACAQMCAwUCCAwEBgMAAAABAgMABBEFIQYSMRMiQVFhcbEHFCMyUoGRwRUmMzZCU2Jyc6Gy0RYkY+ElNDWS8PFDgqL/xAAZAQADAQEBAAAAAAAAAAAAAAABAgMEAAX/xAAiEQACAgIDAAIDAQAAAAAAAAAAAQIRAyESMUEiUQQTMmH/2gAMAwEAAhEDEQA/AOppExco9wSKLgh5Ae/mheytA2eck+2iU5QAqk4osVG3aR83K2xqUBeqyZoduRHGV5qlLRYzykGuR3pXfhQ/M+Yj9bH/AFUboadvw7ZAnGYQKE+Eoc3B0+Ppx/1CttBvTDw7Y/JE/JDFL6M+gmZDaYQb0Nc/5sxowxvsRRjh7vDk4zWstuIEEuc4NUtEqZhdCiDc4dub21i7sWijyr5x50xjmkKg8pxW12C8B2xQ0EUpM6hQRTEW3aR9aEa1ZwMtTFZzHBy43HjTt/QsVvZs0Zjh5B0xVatIyL5QT81iaeS35I5SVG1J/jEENwGeVQT50uqdhe5Ida/BHdcPXiTLzL2DH6wM1X+EYUXhS1YPljGCQRWOKuM9G0/QJVe8jaSWMqqBsncelVDgTj3TJ7aPTCzxygYUOuM1NNWUl0X1riaBF7FVBx5UFfWcGohmv7aKUkeKisvch4u1R8rUS3kjLnkOKr8SNyE0/B+kTjJsIR7FFDngnRDgfEYwR6CrE9zMtuX5DgUvOoSAnK5ofE62Bf4L0gKQtpGPqFZTgm0IzBEAPRae2F9yx80luWz0pjaalzyH/LsoHnSviOm7KTq/CF3aWJlTBhA3AG4obSeD7280+O7RwFcZAPlXWZSH0yQsowYzkfVVa4ZvG/AVsvLsqAdanxRRuijXXB92gJmXmHtpe/CLE92FSfSunXVybiJgowB51Dp4ZJFcrkCm4L7E/Y/TltxwjNFuYpUP7OaBl4fuYzjtJh7c126+1QREj4qXyKrGragksoxachHWl4jc0XBng5hyoT9VFxlGXIXFDGeVVB+LmthIXXdeX2VRgRv2hWYci5z1qYu3jHvUcIV3UjY0TIrDoRQTOornwiDm4OuP3oz/APoVHoXe4ZtM+EQqb4QQTwhdD1T+oULo3a/4VteUf/EN/qpfRpdDrT94FJ3rOq4S0Zq00kH4qmeuKI1FOa0fNML4Yt5y8K8o6ipZCzQHNR22BCu3hU+AYSKNipEKjYeysXAIi2qYLsM+Va3JVISdgfWm8OrZTOKJ/iNpJO7FQoyN9zXH9Z1bUNZuHKlwmMBUJAxnxrqfEyHiLUFsYjm2tiDOV8X8s+g6+0UgvtKW2kKIgULsMCs88ldGjFh5Ozk91YXAb5pPtoVYrm3IdOZHU5Vl2IrpdzYDfuj7KR6nY8q7LU1nZZ/j/wCknCvGtys0dlqUmzEKspOMehrssV2k+mq0QBBHzhXzlqNoEXmGzeddM+CnWnvdJm026lBe1I7Jj87lPhnxxWiMuSMeXHxZ0O8LDThvSRtjzHpVqmshJZKnNv50v/AauSO06etUSM/TCbFkmtYwqAUbBGOZ/ZWdOs1igRebptRaW6qWPNSNaHjdhMxxpUvpEfdVT4XTGjweqVarzu6ROQekTe6kvDtsg0e2Gf0B7qCKTBoyBDJnzxU9k21eMMI51Lgb9M1LBFCjYSQY9tPRFkcsiCRgxGRVd1YhrolBtU3EkyQklJsMeoFV1rxiAcknzodDqNnT2N1IO6UAqOMXcZ72CvjW5tnB2uSPqqFEkZyPjBI8jXFAyJiz74AolgPp0JChR1y2cdcUXIUx800oRFx7vwjd+xf6hW3Da54VtB/oj3VjjkZ4Ru8eAX+oV7hYk8N2Q84xQW2FjLTlC26DxrfUjy2bkeVeReVO6cVFMTIhRjkZpqFsxan/AC6eyiYzmNhUHZqsYwcV6P5jHmo0KmFruBSviO4W202SZs4Xb0opiyxhgarXwjyPDwrLIAWyw5sdeu1F9B7Yo4WVk0d7nmy08jykn1JqK7xI7Z3NBMkI4b04XU7xqbdSAjEEnGT060jsbm0W5K2t5K/exh2zWKTTPQxppDeS25lO1VvWWgiU888Y9CasGrXPxaE9o/LzjYVUJ7ixg5rl7YS745233pErKSdCW9WOdD2TBvZQvDepS6TqfxiP52CrL5inU8trfAyRx9nKnhjGfSq/FaST6oyRDowOT0xVsbrRmyxujt2hcST6poxuCxTk8/E+lbDWJyT8vsa14dsEOgQylQUZc9Pt/nU0NhBIxIiDGtkItxs8+bSlRYLPU4IrNC9wCSOma9a6styzrG2QKDg4ZEqc6RY9po7T9F+JO+Yx7aWUXQ0KsfX3/RJ8/qGP8qpmi6ufwckYYAqgFXLUjjQrk/6Le6k2gaFYx2MLmPmZlBOamkystlOe5Z7mRnuG3Y/pVJBfdkxImPN5Zq06/o+nrGOzgVD5ilWkaVatdNmIHHSqKLaJPimVbUgZZud2JzWyRoIlzXQm0SylXLxLt4Uv1DSbSNUURihwbH5JDzsIy+Cxx7ajMFqkmRLgjw5qn7SMtju1G8Svk9mpHnXBNxKduyBYVO16UCq6YNCxymHaNAMVrLIZmDOgJpRkQcZnn4Ruj5hfeK24XH4tWX8KtOLd+ELjP0R7xW/Cx/Fqzz+rpfRhtbqGjBNQ6kvJD8nsT41PakclRXrgsFbpimEYNBzPGOc5qdY8xPj7ajixykCpOcLbSD0NEU9bsskS75pPx5ELjhi4hxndT7N6Ht754jyAkA00nCXWnSJNhlYb586WW0UjqVsoMFgtzw/ZTywB5EgVVZv0ceX2Up03hy3SYuFCDm5ginYmrJeX8Wn6MxlKrHCGDH2GqxY8T2iMbtmDEZ7OMqd/Ksu+jeuNbN+NIGURqAe6AST4Uk0u2S6tiigbHodwal1fiS41Cxeb4hJz82GTBP1jbpSa01p7YtIto6M24Xw+00KkFyj6ML6zNsD3RvtsKS6akaX9y7AFlZVG3mOlNW1YajatIydm6HDIeoNOfg80WG+t7vULkk4nPJGfmnGKaMW7RPJkjCpF+4ftx+ALW3ablAiHMM43O599TC1t7Yki4HT6VVS9kmRnCswA6YNLVlmMgzI/1mt0dKjzJfJtnVrS7IiXFwAOlTRTl2YtMG86qTqV09GUkHA3Br2gtIXlLOxx60knSsfHt0XbVf8AoF0f9FvdQmit/wANhw4/Jj3UTqv5u3H8A+6lGkN/w5P3AKCYZ6MXzxyue1mGx23rbTkt1kJjlGfbVM1jUCl88Cqcg1Bp+uiynbtkbeqX8SO7L/cSOQ3ZybDypFqlzKGUdpU2nXRurRpVHdalGrse2ANBHW7osasVuMr3lIomNZJWwLjkHXFCQ83xnujYE0dFFau3M7kN5ZoMqjeaEiPaT2moUB6dqPtqe5CGMgZxQSdkD1NKOTcUb8IXHj3R7xW/DJ/Fy0x+rrTiTfhGfH0AP51nhr83bXH0aT0YbWSkIObxqG9HNMB6Vsswji7wJoOa5eWYciE0wobEFRfOsv8A8vLt+iaFWWZRvCalLubWQsuMjpTCiDTIjLdqWQsg67Uzv1aOEhMcp8BW2mtHGOmKmnDyDmjjLDyrgnOuIrTtUngkXFvc91c+D/8AgpPoWlLIkMwnkMMeUmt1YBWPmPI103UtPS8024jmtyhKkhvokdD9tcq4XuTFeX1pdv2cqkhs7DapTjTtFsOS1TLFe6fw+1u3dve1xnkLeNUPUoLNrwskJRIh0ds5Pr6021J5RfGKK6TsyM58RVe4jmihsyIpMuTipLb0aHUVYMbhSjy4yXJHt3q/8LxT6ZpEcQB75LsMHqetcv0yKWcrI5IiTf2mu+cNa5p+v6FDdxQLHIuY5YgclGXY/UcZFWxrZkzNuKKrd9tzkkHBoWMFn6Ntv0roMhsEA5lBOPEVEk2nM+OzUbeVX4ma0I/j7S26xAHYYzTrR7NoIjIWzzVOPiIGUQEUx064gkjKBdh02pJR0PBqxhq2P8Oz5/UH3VWNM1WOOzw0b4VQOlWfWj+L9wcbdkdqT6ZBHPZL8gd08qCQ0zn11ci61aSZEITcb1l1gmVsg8w6VcE0y0hLNNEFydsithp9lNJywxgk+AqlaJPsr2na+lnZdiVUMNt6hutQW5ftCw38qO1Ph6YynsLNsedB3GkTWyIJYipNDYaXZa3lZJGI2qaO5jAU9iSx8cUNOQGbmI60VbXEy268kKkeZrhkGpKJiByFR60RHBb43UZocM5IZ8DasrI3MBgYqbKxNeJgBwxcAdMD31jhpoxoFqCf0a24g34Yn/d++g9EXHD8G36NcuzmOZ3jMQCYJNYtYmB5yuMVpY24kiVycAU0QKFxTOYFE0UB+lRXNuzRsF8RRgwOgrBzihyo7iJU0+UKDjemUTpawZl2wKh1LV9P0iAz6ldxW6fttgn2Dqa5lxP8JXx+OSz0OGSKJhhrmTZyPRfD2mmXKQGkhj8J/G0Nppk9jYNzTsFMzA/MXnUY9pz76p3Eukzaq66lpTgXDL3lJwrr/eq+kf4TTW7XmzIIInjz+yzE/dTrhTVBJZpDMe+oxg+FS/ITjTRT8enaZTprfXIpiXsp+ZTyk42+2tRpFzcSh7w8qnoi/fXSL7s5MhhjPjik8kah+YgcqioPK3o0rEvsSXUSWlqEUAbYAFL9J1q64a1OC+szzDdZoye7KvkfuPhRWpy88gYdCe6PL1pLqJHdQeFacEHGNsyZ8ilNRR3Hh3iPSuJrAy2c3JPH+UtpdnT+49RU7FBJgEYzvXzzbTS206zW8jxTKcpJG3Kyn21f+G/hLkgKwcR2a3sQ27WJQrj2+BrRzaIPFb7O0WFpaGMc8gOR4Uwt4bRFcRYGKr3D+u6JxBhNHuYVlA3gfZx9VWCO1e2UmTlPN0xUpTseMOJJrBB0Kfy7M1pYTobKPlOFCDwrfWcDQpttuTeiLFbf4rEFVOXkFKpbGasrWuzRugyc97wqHhySJbtiSBtjvCrJc21gw7/ZLvXkWzjOUaN2PgMU37XVUL+tfZhriHlPfHvpbOsF5JhiDy+VFzanpcDOlw6RfvAVDbXWkSszW8iv5lelSyZWlorix3LexBO2Xbx3phZR3LW6jnATyoGUCNz471skybBpHHoKuRHEwwyAvke2sxwFu+GwF8K0SGCW4Xm5j3fGmTqiQsEXoKkyqQDre/DE+fo/fUWlOkXDEL+PJUmsA/4Vl/hj30BBk8KQgdcffSjVY+0ZuaxQ+PnTCk/DufwbHn1objjXG4d4bur+IA3AHJCGGQGPifZvQW3QzVIa6pq+n6RB2+pXcVugGRznc+wdTXOOJ/hUYq0PD8XJnb4zMu/tVf7/AGVznU9TutTu5bq+nkmmY/PY+H3D0FLmfmNao40uyDk2EX2oXWo3Rnvp5bmZurSsS31E16B+VGwSSfGgn86ntz3TVBWb6PdPZ62ZcZDpyuPMZFGTFdO1h44WHK/fQAjof/M0rg21HpkYB/nRepWEfN8dhyJwMt1PNsPq8sb0s48sdCQnwylvgnNxEpbfag9enhsLDtp84ZwgC9STQmh6lDIqxSPySZwVYY3++guL7pbhrWGIllV856gmsEMMue0b8maKhpimSQyzM5xjYKB4Uvv1wwJ+c29HwKzKeYYAPht5e7PWhNTGJlHkuT9tb2tHnQ/oXcuNwM+lZwScnr4elbgb1mXZQR1JxSGg1QvE6vE7I6nKsjEFT6EVfOHfhX17SgsGqMNVtht8qcSj2N4/XVFArxTNBqzrPou3494e4k0C4i0+87O77M5tJ+7IPZ9L6jWbfiSGOxjBO+ADtXzlGGjlWRCVdTlWHUHzrqvDt+l7wnbtKGaZRyM56nBpGuJz2dNW6t5LeOR0yGwela2V9atctGh/lVU0vVJnj7OQkog2zRmn6lHbzu8tuw5ujEdaHITgyLiW7RdTZQisPJq2067ESnEKgEeFMmOl30hluIxzHoTWDZ6WT8nIBjqAajOn2asTcVokuYZC+dsVFb2naXCKehNWd4oge8oqFuyRwVQE5q/MjwM3MZtGVoY+ckYrX43IYyDCy7YqV5XO/INvOhZpGIKs4A9KXsY9rf5qz/wx76F0V45OHIUPUL40TrZ/FSfHXsh76r2lXrw6cichbAwKKim9iylSLXpc8UdsqEgYqnfDHOkuhW1vGQS8jMfYF/3p7Y3BEK9z7aonwn3hnvoYjjEcWMerE/7U8YrkDk6pnNbdy8Cc3UbGpAN80PB3Z5Y/DmyKLxtmrIQEbO/toi36VC461JE2PrFE40U4v1367eHnT9IxKkec+DYB2yMY95quTHlvIzVhWbs7MMPSnh0Zsq2B6pEGnHxZU7UEktgbjP8AvWslvycrO7SydBk9N6Lt17pkYjfOfszXoh21wG/RHr6Ua9E5aoFaFUKqPHY9M9c0j1M813Jjw2+yrEflLxsdFPh+7Vau2553PmxIqeToth/oHAxXmGZFHgBmtwK0HziRUjQZFbVr41nNcE1fYbV1X4GLWPWrS9spHwbRlflx1V8/eprlUg3IrovwGapBp3EOoJcuFWa0GMnxVh/c0sv9OOqT8MRQJiJmFQ2+gyPIokm5kHgRTWXiPTzsZlPsNSWWrWLv3ZA3sFS0MDf4bhYY5zkUruuGIbeYuruS/XerQt8sjkohIpbqstw8i9im1Gk+wJtdD5rRGPe3oHUbXs40a2Xv5phIxCnwqKNldVUncedEIine4BxLIFGPChWaEfOk5/Sn97DCwxMMg9KTXNv2Ei9lHlT411nJE+tfmnN/AHvqt6Mpa2XHlVl17bhSfP6pffSThyKZbMSFFEbDIpU9gkrDrGJ3PePdrmHH04k1u7xuA/IPqAH3V06W97FgBhR764/rsnbXNzIT3mcn+dVxq22CXRWmPLeg/S7tGj5lK718EMuxU5prCeaMEdKqhWDyLuKjQ45amlHeGaHzhiPWmAYu/wArE/7QFNnf/IL4nbf7KUXW8QPiKYOxOljl8VX+k0Y+kcvgdakm1Q53Kn6zympoSEMUWdyuW/7aDijMkMRRVwoz3gdiCTketE2+WnSXcc3odtqoiDQMG7IXMvQrn+1Vl95DT+9YJp02SMyOPHr40iHWpZH4acK1ZjoM+W9Rr80eu9bS+ArU1JlzBry7kDy61rW0PzmoHGXp78H8kScY6alx+Rmk7Jz5BhgfzxSNqM4dDHiDTAo3N3EB/wB4oPYT6PvLTh/SQDeTBc7DP/qgDxZwpZn5Nmc/sxmrpLZwTZEkKsPUZoG54Z0e5/K6fAf/AK1LiNZWRx7p5/5LTbybPTlTasHi/VpN7fhq4KebA1abTQbOxHLZxiMeQFFdjOuwZceyuoFk86gpilkh5HJXyr1eosKIecyAh8HaoQxMD7/N6V6vUEE04jP4p3B/0l94pfp2fwFbYYjuZ2r1epX2cQSQrLbOZCW5VJGfOuO6ixzJvXq9V8PpORXrwZBo3S3LWy5Ner1UXYPCaf51BzbEGvV6mFMNvGc0VauW09VIGOVfdXq9RiTy9B9sc6fkgZw3uNEWoHYxkAA79BWK9VTMK9aYrHCgPdwx/nilC1mvVCfZrxfyiJz8qR5CtH61mvUjKkOTk1vb/ONZr1ccStU2lTyWuq2U8JxJHcxMp9Q4rFeoM4+wxWa9XqQJ41g16vVxx//Z'
        onClick={e => setOpen(true)}/>
        </Badge>
        </Icons>
        <UserBox>
        <Badge badgeContent={4} color="error">
        <Avatar sx={{width: 30, height:30}} alt="Remy Sharp" 
        src='https://mui.com/static/images/avatar/1.jpg'
        onClick={e => setOpen(true)}/>
        </Badge>
        <Typography variant='h6'>Gevalinho</Typography>
        </UserBox>
        </StyledToolbar> 
        <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        // anchorEl={anchorEl}
        open={open}
        onClose={e => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    

      </AppBar>
  )
}

export default Navbar
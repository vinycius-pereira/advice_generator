import React, {useEffect, useState} from "react";
import styled from "styled-components"
import axios from "axios"

const Dialog = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 570px;
  height: 300px;
  background: hsl(217, 19%, 24%);
  border-radius: 15px;


  @media screen
  and (min-device-width: 375px)
  and (max-device-width: 812px) {
    text-align: center;
    width: 355px;
    height: 350px;
  }
`

const AdviceId = styled.span`
  font-size: 15px;
  color: #51f8a7;
  letter-spacing: 3px;
  padding: 35px 0 0 0;
`

const PieceOfAdvice = styled.span`
  font-size: 28px;
  color: #cee2e9;
  padding: 0 30px;

  @media screen
  and (min-device-width: 375px)
  and (max-device-width: 812px) {
    font-size: 26px;
  }
`

const Divider = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

const RandomAdviceButton = styled.div`
  position: relative;
  bottom: -25px;
  margin: 10px 0 0 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  background: #51f8a7;

  :hover && :active {
    background: white;
  }

  @media screen
  and (min-device-width: 375px)
  and (max-device-width: 812px) {
    :active {
      background: white;
    }
  }


`

const Button = styled.button`
  position: absolute;
  opacity: 0;
  border: none;
  font-size: 0;
`

const Image = styled.img`
  @media screen
  and (min-device-width: 375px)
  and (max-device-width: 812px) {
    width: 300px;
    height: 15px;
  }
`

const AdviceDisplay = () => {
    const url = `https://api.adviceslip.com/advice`
    const [advice, setAdvice] = useState(null)

    const getAdvice = () => {
        axios.get(url)
            .then(response => {
                const slip = response.data
                setAdvice(slip)
            })
    }

    useEffect(() => {
        getAdvice()
    }, [url])

    const handleAdviceUpdate = () => {
        getAdvice()
    }


    if (advice !== null) {

        let {slip} = advice

        return (
            <Dialog>
                <AdviceId>ADVICE #{slip.id}</AdviceId>
                <PieceOfAdvice>"{slip.advice}"</PieceOfAdvice>
                <Divider>
                    <Image src="image/pattern-divider-desktop.svg" alt="divider"/>
                    <RandomAdviceButton onClick={handleAdviceUpdate}>
                        <Button/>
                        <img src="image/icon-dice.svg"/>
                    </RandomAdviceButton>
                </Divider>
            </Dialog>
        )
    }
    return (
        <Dialog>
            {null}
        </Dialog>
    )
}

export default AdviceDisplay
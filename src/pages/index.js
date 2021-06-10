import React, {useEffect} from "react"
import { Link } from "gatsby"

import styled from 'styled-components'
import Layout from "../layouts/mainLayout"
import SEO from "../components/seo"
import { Hero } from "../components/Hero"
import Products from "../components/Products"
import Certificates from "../components/Certificates"
import Stats from "../components/Stats"
import Email from "../components/Email"
import Footer from "../components/Footer"
import 'bootstrap/dist/css/bootstrap.min.css';






const IndexPage = () =>  {

    return (
    <Layout >
      <SEO title="Home" />
      <Hero HeaderMark="Продажа и изготовление расширительных баков"/>
      <Products heading="Выберите расширительный бак"/>
      <Certificates  />
      <Stats  />
      <Email />
      
      
      {/* <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </p> */}
    </Layout>
    )
  }
  

 
export default IndexPage

const Container = styled.div``
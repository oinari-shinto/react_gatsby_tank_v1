import React from 'react'
import { Container, Table } from 'react-bootstrap'
import Link from 'gatsby-link'
import styled from 'styled-components'

import {useStaticQuery, graphql} from 'gatsby'

import ImageTab2 from '../../assets/images/zilmet-ultra-1000.jpg'
import ImageTab1 from '../../assets/images/zilmet-small.jpg'


const TableZilemet = () => {

  


    return (
        <div>
            <TableSetting>
               <Container>
                  <Table responsive  bordered>
                      <thead>
                        <tr>
                          <th>Model / Объем, л</th>
                          <th>Цена (руб.)</th>
                          <th>Диаметр, мм</th>
                          <th>Высота, мм</th>
                          <th>Подкл. дюйм</th>
                          <th>Вес, кг</th>
                          <th>P, бар</th>
                          {/* <th>Мембрана</th> */}
                          <td ><b>Фото</b></td>
                        </tr>
                      </thead>
                      <tbody>
                      <tr>
                        <td colspan="8" ><p>Гидроаккумулятор/Бак расширительный Zilmet ULTRA-PRO</p></td>
                      </tr>
                      <tr>
                          <td>ULTRA-PRO 200</td>
                          <td><b>21,900 руб.</b></td>
                          <td>550</td>
                          <td>1235</td>
                          <td>1 1/4</td>
                          <td>44.5</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="3" ><img src={ImageTab1} width="250px" /></td>
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 300</td>
                          <td><b>25,200 руб.</b></td>
                          <td>630</td>
                          <td>1365</td>
                          <td>1 1/4</td>
                          <td>54</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 500</td>
                          <td><b>44,800 руб.</b></td>
                          <td>750</td>
                          <td>1560</td>
                          <td>1 1/4</td>
                          <td>80.8</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                        <td colspan="8" ><p></p></td>
                        </tr>
                        <tr >
                          <td>ULTRA-PRO 750</td>
                          <td><b>76,600 руб.</b></td>
                          <td>750</td>
                          <td>2075</td>
                          <td>2</td>
                          <td>150</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          <td rowSpan="7"   ><br/><img   src={ImageTab2} width="250px"     /><p>Мембрана: Сменная (Италия)</p></td>
                          
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 1000</td>
                          <td><b>96,500 руб.</b></td>
                          <td>850</td>
                          <td>2100</td>
                          <td>2</td>
                          <td>200</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                          
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 1500</td>
                          <td><b>189,800 руб.</b></td> 
                          <td>960</td>
                          <td>2420</td>
                          <td>2</td>
                          <td>260</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 2000</td>
                          <td><b>265,800 руб.</b></td> 
                          <td>1100</td>
                          <td>2553</td>
                          <td>2</td>
                          <td>363</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 3000</td>
                          <td><b>459,800 руб.</b></td> 
                          <td>1200</td>
                          <td>2800</td>
                          <td>2 1/2</td>
                          <td>536</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 4000</td>
                          <td><b>638,300 руб.</b></td> 
                          <td>1450</td>
                          <td>3180</td>
                          <td>2 1/2</td>
                          <td>767</td>
                          <td>10</td>
                          {/* <td>Сменная(Италия)</td> */}
                        </tr>
                        <tr>
                          <td>ULTRA-PRO 5000</td>
                          <td><b>829,100 руб.</b></td> 
                          <td>1450</td>
                          <td>3700</td>
                          <td>3</td>
                          <td>840</td>
                          <td>10</td>
                         {/*  <td>Сменная(Италия)</td> */}
                        </tr>
                      </tbody>
                  </Table>
                </Container>
            </TableSetting>
            
        </div>
    )
}

export default TableZilemet


const TableSetting = styled.div`
    white-space: nowrap;
    
    text-align: center;
`
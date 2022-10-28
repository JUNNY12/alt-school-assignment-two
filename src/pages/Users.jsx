import React from 'react'
import {useState} from "react"
import useAxios from '../hooks/useAxios'
import Loader from '../components/Loader'

const Users = () => {
  const USER_URL = 'https://randomuser.me/api/?results=100'
  const {response, loading} = useAxios(USER_URL)
  const [currentPage, setCurrentPage] = useState(1)
  const [userPerPage, setUserPerPage] = useState(5)
  const [pageNumLimit, setPageNumLimit] = useState(5)
  const [maxPageLimit, setMaxPageLimit] = useState(5)
  const [minPageLimit, setMinPageLimit] = useState(0)


  const pages = []
  for (let i=1; i<=Math.ceil(response?.results.length / userPerPage); i++){
    pages.push(i)
  }

  const indexOfLastPage = currentPage * userPerPage
  const indexOfFirstPage = indexOfLastPage - userPerPage

  const currentUsersPerPage = response?.results.slice(indexOfFirstPage, indexOfLastPage)
  


  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id))
  }

  const handlePrevPage = () => {
    setCurrentPage(currentPage - 1)

    if((currentPage - 1) % pageNumLimit === 0){
      setMaxPageLimit(maxPageLimit - pageNumLimit);
      setMinPageLimit(minPageLimit - pageNumLimit)
    }
  }

  const handleNextPage = () => {
    setCurrentPage(currentPage + 1)

    if(currentPage + 1 > maxPageLimit){
      setMaxPageLimit(maxPageLimit + pageNumLimit);
      setMinPageLimit(minPageLimit + pageNumLimit)
    }
  }

  
  let pageIncrementBtn = null;

  if(pages.length > maxPageLimit){
    pageIncrementBtn= <div onClick={handleNextPage} 
    className='dot'
     > &hellip; </div>
  }

  let pageDecrementBtn = null;

  if(pages.length > maxPageLimit){
    pageDecrementBtn= <div onClick={handlePrevPage} 
    className={currentPage === pages[0] ? 'hide' : 'dot'}
    > &hellip; </div>
  }


  return (
    <div className='container'>
      <h1 className='header'>Users</h1>
      <div className='tableResponsive'>
        <table className='table'>
          <thead>
            <tr>
              <th>Gender</th>
              <th>Name</th>
              <th>Image</th>
              <th>Age</th>
              <th>Number</th>
              <th>Email</th>
              <th>Location</th>
            </tr>
          </thead>
            <tbody>
            {
              currentUsersPerPage?.map((result)=>{
                return(
                  <tr key={result.id}>
                    <td>{result.gender}</td>
                    <td>
                      <span> {result.name.first} </span>
                      <span> {result.name.last} </span>
                    </td>
                    <td>
                      <img src={result.picture.medium} alt={result.name.first} className='img' />
                    </td>
                    <td>
                      {result.registered.age} years
                    </td>
                    <td>
                      {result.phone}
                    </td>
                    <td>
                      {result.email}
                    </td>
                    <td>
                      {result.location.country}
                    </td>
                </tr>
                )
              })
            }
            </tbody>
      
        </table>

        { response && <div className='paginationContainer'>
        <div  className='prev'>
          <button 
          onClick={handlePrevPage}
          disabled={currentPage === pages[0] ? true : false}
          >
          Prev</button>
        </div>
        {pageDecrementBtn}
        {pages.map((num) => {
          if(num  < maxPageLimit + 1 &&  num > minPageLimit){
            return(
              <ul className='pagination'>
                <div
                key={num}
                id={num}
                className={currentPage === num ? 'pagenum active' :'pagenum'}
                onClick={handleClick}
                 >{num}</div>
              </ul>
            )
          }
          else{
            return null
          }
        })}
        {pageIncrementBtn}
         <div className='next'>
          <button 
          onClick={handleNextPage}
          disabled={currentPage === pages[pages.length-1] ? true : false}
          >Next</button>
        </div>
      </div>}
      </div>
    
    </div>
  )
}

export default Users
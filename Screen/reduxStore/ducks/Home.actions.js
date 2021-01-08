import { createAction, createAsyncThunk } from '@reduxjs/toolkit'
import HomeModel from "../../Model/HomeModel";
export const updateState = createAction('Home/updateState')

export const updateName = createAction('Home/updateName')

export const getHomePageData = createAsyncThunk('Home/getHomePageData', async (payload) => { 
  let dataModel = await getHomeData()
  return dataModel
})

export const submitUpdate = createAsyncThunk('Home/submitUpdate', async (payload) => { 
  let dataModel = await HomeModel.UpdateNameStorage(payload)
  console.log(dataModel)
  return dataModel
})

 getHomeData = async () => {
  let dataModel = await HomeModel.GetDataHome("")
  // var myHeaders = new Headers()
  //   myHeaders.append("Authorization", "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCIsImtpZCI6IkhCeGw5bUFlNmd4YXZDa2NvT1UyVEhzRE5hMCJ9.eyJhdWQiOiI0Zjg4MjE1MS1jODU1LTQ1YTAtYjgwNS04OWE0YTZjYTFiNDAiLCJpc3MiOiJodHRwczovL3N0cy53aW5kb3dzLm5ldC8zNmRhNDVmMS1kZDJjLTRkMWYtYWYxMy01YWJlNDZiOTk5MjEvIiwiaWF0IjoxNTU5Mzc2ODc0LCJuYmYiOjE1NTkzNzY4NzQsImV4cCI6MTU1OTM4MDc3NCwiYWNyIjoiMSIsImFpbyI6IjQyWmdZTWdNa011L1pDNFZNL0hTWXZiWUFCT1ZueFljMFZHcEJRR2NDWC9LR3E3NVRRQUEiLCJhbXIiOlsicHdkIl0sImFwcGlkIjoiMTE1ZWMyOWUtYTllNi00YzBhLWI2NzEtM2RlNWFjMGRlMzg0IiwiYXBwaWRhY3IiOiIxIiwiZmFtaWx5X25hbWUiOiJMZSIsImdpdmVuX25hbWUiOiJUb2FuIiwiaXBhZGRyIjoiMjcuNzQuMjQ5Ljc1IiwibmFtZSI6IkxlLCBUb2FuIChVUyAtIFByaW5jZXRvbikiLCJvaWQiOiJjOGUwMmYzNy02MmU3LTQzNGItODU2MS02OWUyMDljYTc5ZDYiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtMjM4NDQ3Mjc2LTEwNDA4NjE5MjMtMTg1MDk1Mjc4OC0yNTEwODQ2Iiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic3ViIjoiUzJSd0k4bTZMZ3R4OHZXNGtFZ0dPcXRVYlJUc252Y003VUdDRENoNkpQayIsInRpZCI6IjM2ZGE0NWYxLWRkMmMtNGQxZi1hZjEzLTVhYmU0NmI5OTkyMSIsInVuaXF1ZV9uYW1lIjoidG9hbmxlQGRlbG9pdHRlLmNvbSIsInVwbiI6InRvYW5sZUBkZWxvaXR0ZS5jb20iLCJ1dGkiOiJoNVk4YS1OU1NFS3F6bmtmeHVJTUFBIiwidmVyIjoiMS4wIn0.TALL1k7AScj0OtiyoAoNE0ZIdT4ylyvDDCU-0EnehThG_lqJaoBRepupRGKkzaSo5P61B8tPdXEpXVr3ulsNCOwKMfhI1yWiDK-EPO0UH0Cx86j3cAf4LEA9jeka_2mpBIBLZda92w0mFzOTj4QXizxFpYe6Jga7kehqzF3HLuOtPsIpouat6PsJG-GwzFnZrasp60Z6QqDwkSSiY-qe4JLqZlUZuAljY2jJLH-316RiLkPWb3e6yP7hMu9mrnRq0sQ8UcYadfMprqZ0eMNrUQu3poqVzP1NwomELsRKrUJJ7bTXdzS21azF3XTAMP-UlNQEVNwWhNnDKa6tFwoRjw");
  //   myHeaders.append("Content-Type", "application/json")

  //   var raw = JSON.stringify({ "Tocken": "eyJ0eXAiOiJKV1QiLCJhbGciOihVUyAtIFByaW" })
  //   var url = HomeModel.GetUrl(this.router)
  //   var requestOptions = {
  //     method: 'POST',
  //     headers: myHeaders,
  //     body: raw,
  //     redirect: 'follow'
  //   };

  //   await fetch("http://192.168.1.184:147/131220-2-4-33-L3/output", requestOptions)
  //     .then(response => response.text())
  //     .then(async (result) => {
  //       let response = JSON.parse(result)
  //       if (response.Status) {
  //         let dataModel = await HomeModel.GetDataHome(response.data)
  //         let dataTest = []
  //         for (let i = 0; i < 10; i++) {
  //           dataTest[i] = { key: i, Status: "0", Name: "Device " + (i), GPIO: i }
  //         }
  //         this.setState({ data: dataModel, isloading: true, loading: false })
  //       }
  //     }
  //     )
  //     .catch(error => console.log('error', error))
  return dataModel
}

export default {
  getHomePageData,
  updateState,
}

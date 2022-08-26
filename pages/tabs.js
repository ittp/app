const loadTabs = (props) => {
  const request = await fetch(props.url)
  if(request.body) {
  }
  else {
    console.info("no external data fetched")
  }
  // return {props.data}
}

const Page = (Tab, pageProps) => {
  
  
  Tabs
  
  return <Tab {...pageProps} />

}

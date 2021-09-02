import React,{useState,useRef,useCallback} from 'react';
import Repo from './Repo';
import GetRepos from './getRepos';
import Loading from './Loading';



function App() {
  const [pageNum, setpageNum] = useState(1);

  const {
    repos,
    loading,
    hasMore
  } = GetRepos(pageNum);


  const observer = useRef();

  const lastRepo = useCallback(node => {
    
    if (loading) return

    if (observer.current) observer.current.disconnect()
    console.log(observer.current)
    observer.current = new IntersectionObserver(entries => {
      console.log(entries)
      if (entries[0].isIntersecting ) {
        setpageNum(prevPageNum => prevPageNum + 1)
        
      }
    })
    if (node) observer.current.observe(node)
  }, [loading])




  



  return (<>
            <h2 className="logo">Anas Samoudi Work</h2>
            {
              repos.map((repo, index)=>{
                if(repos.length === index + 1){
                  return <div key={repo.id} ref={lastRepo}><Repo   repo={repo} /></div>
                }else{
                  return <Repo key={repo.id} repo={repo} />
                }
              }
                )
            }

            {loading ? <Loading /> : null}
    </>
  );
}

export default App;

import React from 'react'
import styled from 'styled-components'
import moment from 'moment';

function Repo({ repo }) {



    
   

    
    return (
        <Wrapper>
            <div className="container">
                <div className="avatar">
                    <img 
                        src={repo.owner.avatar_url} 
                        alt="Owner Avatar" />
                </div>
                <div className="repo__info">
                    <h3 
                        className="repo__name"  
                        onClick={()=>window.location.href=repo.html_url}>{repo.name}</h3>
                    <br />
                    <p className="repo__description">{repo.description}</p>
                    <br />
                    <div className="repo_stats">
                        <span className="repo__stars">Stars: {repo.stargazers_count}</span>
                        <span className="repo__issues">Issues: {repo.open_issues}</span>

                        <p className="repo__date">
                            Submitted {moment(repo.created_at, "YYYYMMDD").fromNow()} by <span 
                                className="repo__owner" 
                                onClick={()=>window.location.href=repo.owner.html_url}> {repo.owner.login}</span></p>
                    </div>
                </div>
            </div>
        </Wrapper>
    )
}




export const Wrapper = styled.div`
    margin: 1.5rem 1rem;
    overflow: hidden;
    
    .container{
        border: 1px solid lightgray;
        border-radius: 10px;
    }

    img{
        width: 100%;
        height: 400px;
        object-fit: cover;
        box-shadow: 0 0 2px rgba(0,0,0,0.1);
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    .repo__info{
        margin: auto 0;
        padding: 2rem 1rem;
    }

    .repo__name{
        &:hover{
            cursor: pointer;
        }
    }

    .repo_stats{
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;

    }

    .repo__stars, .repo__issues{
        padding: .25rem .5em;
        color: #24292f;
        background-color: #f6f8fa;
        border:1px solid rgba(27,31,36,0.15) ;
        border-radius: 5px;
        box-shadow: 0 2px 0 rgba(27,31,36,0.04), inset 0 2px 0 rgba(255,255,255,0.25)
    }

    .repo__stars{
        &::before{
            font-family: 'Font Awesome 5 Free';
            content: '\f005';
            margin-right: 10px;
            font-size:.8em;
            font-weight: 400;
        }
    }

    .repo__issues{
        &::before{
            font-family: 'Font Awesome 5 Free';
            content: '\f00d';
            margin-right: 10px;
            font-size:.8em;
            font-weight: 900;
        }
    }



    .repo__date{
        font-style: italic;
        color: #888888;
    }

    .repo__owner{
        font-weight: 500;
        text-decoration: underline;
        &:hover{
            cursor: pointer;
        }
    }

    @media (min-width:576px){
        .container{
            display: grid;
            grid-template-columns: 300px 1fr;
            gap: 1rem;
        }
        .avatar{
            object-fit: cover;
            width: 300px;
        }

        img{
            width: 300px;
            height: 100%;
            border-top-right-radius: 0;
            border-bottom-left-radius: 10px;
        }
    }



`;




export default Repo

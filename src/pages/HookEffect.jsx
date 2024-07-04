import React, { useEffect, useState } from "react";
import './HookEffect.css';
import 'antd/dist/reset.css';
import '../index.css'

// Callback luôn được gọi sau khi component mounted
function HookEffect() {
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [showGoToTop, setGoToTop] = useState(false)

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then(res => res.json())
            .then(posts => {
                setPosts(posts);
            });
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 200) {
                setGoToTop(true)
            }
            else {
                setGoToTop(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        //clean up EventListener
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div className="App" style={{ padding: 20, textAlign: 'center' }}>
                <input
                    placeholder="Nhập vào đây"
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    style={{ padding: 10, width: '80%', marginBottom: 20, fontSize: 16 }}
                />
            </div>

            <ul className="post-list">
                {posts.map(post => (
                    <li key={post.id} className="post-item">
                        {post.title}
                    </li>
                ))}
            </ul>

                {showGoToTop && (
                    <button style={{position: "fixed", right: 20, bottom: 20, backgroundColor: 'aqua'}} >Go To Top</button>
                )}
        </>
    );
}

export default HookEffect;

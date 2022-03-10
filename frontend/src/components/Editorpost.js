import React, { useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import '../css/Editor.css'

// import 'codemirror/lib/codemirror.css'
import Prism from 'prismjs'
import 'prismjs/themes/prism.css'
import '@toast-ui/editor/dist/toastui-editor.css'
import { Editor } from '@toast-ui/react-editor'

// code-syntax-highlight
import '@toast-ui/editor-plugin-code-syntax-highlight/dist/toastui-editor-plugin-code-syntax-highlight.css'
import codeSyntaxHighlight from '@toast-ui/editor-plugin-code-syntax-highlight'

// color-syntax
import 'tui-color-picker/dist/tui-color-picker.css'
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css'
import colorSyntax from '@toast-ui/editor-plugin-color-syntax'

//Viewer
import Viewer from '@toast-ui/editor/dist/toastui-editor-viewer'
import '@toast-ui/editor/dist/toastui-editor-viewer.css'
import {useHistory} from "react-router-dom";

function EditorPost() {
    //에디터를 가리킴
    const editorRef = useRef()
    const history = useHistory()
    // const viewerRef = useRef()

    //post 버튼 누르면 localStorage에 저장
    const btnClickListener = () => {
        const editorInstance = editorRef.current.getInstance()
        const getContent_md = editorInstance.getMarkdown()
        console.log('-- 마크다운 --')
        // console.log(getContent_md)

        //Editor 버전 2.x는 getHtml(), 3.x는 getHTML()
        const getContent_html = editorInstance.getHTML()
        console.log('-- HTML --')
        // console.log(getContent_html)

        localStorage.setItem('paragraph', getContent_html)

        history.push("/viewer")
    }

    //cancel 버튼 누르면 내용 보여줌
    const View = () => {
        const test = document.querySelector('#viewer')

        // const viewerInstance = viewerRef.current.getInstance()
        const view = localStorage.getItem('paragraph')
        test.innerHTML = view

        // viewerInstance.setMarkdown(view)
        // paintGreeting(view);

        console.log(view)
    }

    return (
        <div>
            <h1 className="title">에러 작성</h1>
            <div className="full-container">
                <div className="full-container">
                    <div className="flex-container">
                        <div className="box2">에러명</div>
                        <input
                            className="post_error_name"
                            type="search"
                            aria-label="HomeSearch_login"
                        />
                    </div>
                    <div className="flex-container">
                        <div className="box2">카테고리</div>
                        <input
                            className="post_error_name"
                            type="search"
                            aria-label="HomeSearch_login"
                        />
                    </div>
                </div>
                <div>
                    <Editor
                        previewStyle="vertical"
                        height="50vh"
                        initialEditType="markdown"
                        initialValue="내용을 입력하세요."
                        plugins={[colorSyntax, [codeSyntaxHighlight, { highlighter: Prism }]]}
                        ref={editorRef}
                    />
                </div>
                <div className="flex-container-inline">
                <button onClick={btnClickListener} type="submit" className="submitBtn">
                    Post
                </button>
                </div>
            </div>
        </div>
    )
}

export default EditorPost
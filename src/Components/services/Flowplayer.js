import React, { Component } from "react";
import { push } from "./Analytics"
import "./Flowplayer.scss"

const videos = [
    {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "https://ynethd-i.akamaihd.net/i/cdnwiz/0318/a105109_AVC_18Mbit_1920x1080_pfamVUO0_,800,1600,.mp4.csmil/master.m3u8"
            },
            {
                type: 'video/mp4',
                src: "https://mediadownload.ynet.co.il/cdnwiz/0318/a105109_AVC_18Mbit_1920x1080_pfamVUO0_800.mp4"
            }]
    },
    {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "https://ynethd-i.akamaihd.net/i/cdnwiz/0318/a104767_H264_8Mbit_streaming_1920x1080_emNrMXJA_,800,1600,.mp4.csmil/master.m3u8"
            },
            {
                type: 'video/mp4',
                src: "https://mediadownload.ynet.co.il/cdnwiz/0318/a104767_H264_8Mbit_streaming_1920x1080_emNrMXJA_800.mp4"
            }]
    },
    {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "https://ynethd-i.akamaihd.net/i/cdnwiz/0318/RBK-RBK-DUA-COMSTR-015-REF-GLO-02_f9gOaLVX_,800,1600,.mp4.csmil/master.m3u8"
            },
            {
                type: 'video/mp4',
                src: "https://mediadownload.ynet.co.il/cdnwiz/0318/RBK-RBK-DUA-COMSTR-015-REF-GLO-02_f9gOaLVX_800.mp4"
            }]
    },
    {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "https://ynethd-i.akamaihd.net/i/cdnwiz/0318/RBK-RBK-DUA-FLESTR-015-REF-GLO-02_LnlECWjm_,800,1600,.mp4.csmil/master.m3u8"
            },
            {
                type: 'video/mp4',
                src: "https://mediadownload.ynet.co.il/cdnwiz/0318/RBK-RBK-DUA-FLESTR-015-REF-GLO-02_LnlECWjm_800.mp4"
            }]
    },
    {
        sources: [
            {
                type: "application/x-mpegurl",
                src: "https://ynethd-i.akamaihd.net/i/cdnwiz/0318/RBK-RBK-SSR-FAFLEX-010-REF-GLO-03_JCf6LQbU_,800,1600,.mp4.csmil/master.m3u8"
            },
            {
                type: 'video/mp4',
                src: "https://mediadownload.ynet.co.il/cdnwiz/0318/RBK-RBK-SSR-FAFLEX-010-REF-GLO-03_JCf6LQbU_800.mp4"
            }]
    },
];

// var VIDEO = "";
// const VIDEO_URL = {
//     callback: VIDEO,
//     desktop: VIDEO.replace("mediadownload.ynet.co.il", "ynethd-i.akamaihd.net"),
//     mobile: VIDEO.replace("mediadownload.ynet.co.il", "vod.ynet-cdnwiz.com")
// }

class FlowPlayer extends Component {
    constructor() {
        super();
        this.isMobile = this.isMobile.bind(this);
        this.embedVideo = this.embedVideo.bind(this);
        this.state = {
            source: [],
            firstPlaying: true,
        }
    }
    isMobile() {
        if (navigator.userAgent.match(/Android/i) ||
            navigator.userAgent.match(/webOS/i) ||
            navigator.userAgent.match(/iPhone/i) ||
            navigator.userAgent.match(/iPad/i) ||
            navigator.userAgent.match(/iPod/i) ||
            navigator.userAgent.match(/BlackBerry/i) ||
            navigator.userAgent.match(/Windows Phone/i)
        ) {
            return true;
        } else {
            return false;
        }
    }
    async componentDidMount() {
        this.setState({
            source: this.props
        });
        await this.embedVideo();
    }

    embedVideo() {
        var container = this.player;
        window.flowplayer.conf.fullscreen = true;
        window.flowplayer((api, root) => {
            var fsbutton = root.querySelector(".fp-fullscreen");

            if (this.isMobile()) {
                container.addEventListener("click", () => {
                });
            }
            if (!this.isMobile()) {
                api.on("ready", function () {
                    root.querySelector(".fp-controls").appendChild(fsbutton);
                });
            }
            api.on("cuepoint", () => {
                if (this.state.firstPlaying)
                    push("Video_Play", "https://mediadownload.ynet.co.il/cdnwiz/0318/a105109_AVC_18Mbit_1920x1080_pfamVUO0_800.mp4");
                this.setState({
                    firstPlaying: false
                });
            });
        });
        window.flowplayer(container, {
            key: '$858384515984319,$509034830680622,$968022418025930,$104200519403602,$955543217793552,$112133720880866,$508506330648762,$509034830680622,$664969740079151,$574051834599330,$617925037243662',
            muted: false,
            analytics: "UA-5536870-34",
            fullscreen: true,
            native_fullscreen: true,
            ratio: 9 / 16,
            cuepoints: [3],
            buffering: false,
            mouseoutTimeout: 1500,
            share: false,
            hlsjs: {
                maxMaxBufferLength: 60
            },
            loop: true,
            autoplay: false,
            playlist: videos,
        });
    }
    render() {
        return (
            <div className="player-wrap">
                <div className="player-reebok"></div>
                <div id="player" ref={(player) => { this.player = player }} data-autoplay="true" data-loop="true" className="flowplayer fp-full fixed-controls play-button fp-mute"></div>
            </div>
        );
    }
}

export default FlowPlayer;
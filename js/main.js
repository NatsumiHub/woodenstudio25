
// -----------------------------------------
// レスポンシブ対応：ブレイクポイントの設定
// -----------------------------------------
// GSAPからメディアクエリの関数を実行
const mm = gsap.matchMedia();
// ブレイクポイント指定 
// 端末の画面幅が、1025px以上の時（PC）
mm.add("(min-width: 1025px)", () => {
    gsap.fromTo(
        // どこに設定させるか
        ".concept-first .column-left",
        // 何秒
        2,
        {
            // 「どこから」表示させる
            x: -100,
            opacity: 0
        },
        {
            // 「どこまで」表示させる
            x: 0,
            opacity: 1,
    
            // -----------------------------------------
            // スクロールした際にGSAPが有効になるか設定
            // -----------------------------------------
            // 設定箇所を指定
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                // 
                start: "top center",
                // 開発用のスクロールマーカー
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            // x軸を画面の右枠外に置いた状態で
            x: 100,
            opacity: 0
        },
        {
            x: 0,
            opacity: 1,
    
            // delay（ディレイ）とは、アニメーションを 「始めるまでに待つ時間（秒）」 を設定できる
            delay: 0.5,
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: false
            }
        }
    )
}
)
// 端末の画面幅が、599px以下の時（スマホ）
mm.add("(max-width: 599px)", () => {
    gsap.fromTo(
        // どこに設定させるか
        ".concept-first .column-left",
        // 何秒
        2,
        {
            // 「どこから」表示させる
            y: 100,
            opacity: 0
        },
        {
            // 「どこまで」表示させる
            y: 0,
            opacity: 1,
    
            // -----------------------------------------
            // スクロールした際にGSAPが有効になるか設定
            // -----------------------------------------
            // 設定箇所を指定
            scrollTrigger: {
                trigger: ".concept-first .column-left",
                // 
                start: "top center",
                // 開発用のスクロールマーカー
                markers: false
            }
        }
    )
    
    gsap.fromTo(
        ".concept-first .column-right",
        2,
        {
            // x軸を画面の右枠外に置いた状態で
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
    
            scrollTrigger: {
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: false
            }
        }
    )
}
)
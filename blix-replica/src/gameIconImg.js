var IconsHashmap = new Map([
['Valorant', "https://yt3.ggpht.com/ovpvL9DLf9eR-ZQwqrtBfFnt92_o2btElKQ-pxuE5Qx0OeuRNaRLKIMJgrL5-j_kP4QhXDWN3bY=s900-c-k-c0x00ffffff-no-rj"],
['CS:GO', 'https://i.pinimg.com/originals/b1/02/24/b10224ae75edd5debd06c44662cbcb30.png'],
['R6', 'https://i.pinimg.com/originals/b4/d7/10/b4d710c6bc6c9009e8b88d9e2326ddec.jpg'],
['Dota2', 'https://www.logolynx.com/images/logolynx/a4/a4aacddbf9fda4a28170f32fe4e26e8e.png'],
['LoL', 'https://esports.eldesmarque.com/wp-content/uploads/2019/09/LoL-1.jpg'],
['RL','https://i.pinimg.com/originals/29/c7/ee/29c7ee923fcd5e5d575488dcc610c10c.png'],
['FF', 'https://www.xtrafondos.com/wallpapers/free-fire-logo-3537.jpg'],
['Industry','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwVI3SM6ExiKKea0fLI3isB0Dw-O_3b2Gbp0Nmw1lsZ_nQBkigrWCh6-HO6GEsYw6fHw&usqp=CAU'],
['GWENT','https://p4.wallpaperbetter.com/wallpaper/9/814/418/gwent-the-witcher-3-wild-hunt-crown-wallpaper-preview.jpg'],
['Games','https://www.nicepng.com/png/detail/164-1643040_rocket-transparent-blue-game-rocket-icon-png.png']
]);

function GameIconImg(props){
    return <img className='game-icon'src={IconsHashmap.get(props.gameName)} alt={props.gameName}/>
}

export default GameIconImg
export {IconsHashmap}
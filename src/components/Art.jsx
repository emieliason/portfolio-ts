import Flipbook from "./Flipbook";
import bacchae from "../assets/commissions/bacchae.png";
import cereal from "../assets/commissions/cereal.png";
import chiakana from "../assets/commissions/chiakana.png";
import flick from "../assets/commissions/flick.png";
import grandparents from "../assets/commissions/grandparents.png";
import kemono from "../assets/commissions/kemono.png";
import lions from "../assets/commissions/lions.png";
import petesy from "../assets/commissions/petesy.png";
import playbill from "../assets/commissions/playbill.png";
import poster from "../assets/commissions/poster.png";
import shuyume from "../assets/commissions/shuyume.png";
import spellingbee from "../assets/commissions/spelling-bee.png";
import thirdrobins from "../assets/commissions/thirdrobins.png";
import thomas from "../assets/commissions/thomas.png";
import tidus from "../assets/commissions/tidus.png";
import tmpf from "../assets/commissions/tmpf.png";
import yuna from "../assets/commissions/yuna.png";
import twochan from "../assets/personal/2chan.png";
import byungchan from "../assets/personal/byungchan.png";
import dayoung from "../assets/personal/dayoung.png";
import hangyul from "../assets/personal/hangyul.png";
import ibeolkick from "../assets/personal/ibeol-kick.png";
import lovebomb from "../assets/personal/love-bomb.png";
import musical from "../assets/personal/musical.png";
import seungsik from "../assets/personal/seungsik.png";
import sixfanart from "../assets/personal/sixfanart.png";
import subin from "../assets/personal/subin.png";
import copy from "../assets/schoolwork/copy.jpg";
import shell from "../assets/schoolwork/shell.jpg";
import shiny from "../assets/schoolwork/shiny.jpg";

export default function Art() {
  const commissionImages = [
    bacchae,
    cereal,
    chiakana,
    flick,
    grandparents,
    kemono,
    lions,
    petesy,
    playbill,
    poster,
    shuyume,
    spellingbee,
    thirdrobins,
    thomas,
    tidus,
    tmpf,
    yuna,
  ];

  const personalImages = [
    twochan,
    byungchan,
    dayoung,
    hangyul,
    ibeolkick,
    lovebomb,
    musical,
    seungsik,
    sixfanart,
    subin,
  ];
  const schoolworkImages = [copy, shell, shiny];

  return (
    <div className="container">
      <div className="art--container">
        <Flipbook title="Commissions" imageList={commissionImages} />
        <Flipbook title="Schoolwork" imageList={schoolworkImages} />
        <Flipbook title="Personal" imageList={personalImages} />
      </div>
    </div>
  );
}

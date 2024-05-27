import KopackiRit1 from "../Images/kopacki_rit_1.png";
import BiljniSvijet from "../Images/biljnisvijet.png";
import PovijestParka from "../Images/povijestParka.png";
import Tikveš from "../Images/tikveš.png";
import životinjskiSvijet from "../Images/životinjskisvijet.png";
export default function Main() {
  return (
    <div className="Main">
        <h1>O parku</h1>
        <div className="oParku">
          <p>
            Područje Parka prirode Kopački rit nalazi se na krajnjem
            sjeveroistočnom dijelu Republike Hrvatske, odnosno dio je širega
            geografskog područja istočne Hrvatske. To je ravničarski dio
            geografske cjeline Baranje, u sastavu Osječko-baranjske županije,
            pretežito nizinskog područja između rijeka Drave i Dunava te državne
            granice s Republikom Mađarskom. Prostire se sjeverno od rijeke Drave
            od ušća Drave u Dunav te uzvodno Dunavom na njegovoj lijevoj i
            desnoj obali do nekadašnjeg pristaništa Kazuk. Istočna granica Parka
            prirode utvrđena je Državnom granicom prema Republici Srbiji.
          </p>
          <img src={KopackiRit1} alt="" />
        </div>
        <h1>Biljni svijet</h1>
        <div className="biljniSvijet">
          <p>
            Zbog blago valovitoga mikroreljefa u Kopačkom je ritu izražena
            mozaičnost staništa. Ovisno o dubini i vremenu zadržavanja poplavne
            vode izmjenjuju se i različite biljne zajednice. Tako najveći dio
            poplavne doline prekrivaju šume bijele vrbe, na nešto višim terenima
            šume bijele vrbe i crne topole, a na još uzdignutijima šume hrasta
            lužnjaka. Vodene površine prekrivene su zajednicama vodenih leća,
            mrijesnjaka, krocnja, lokvanja i plavuna. Na povremeno plavljenim
            površinama najrasprostranjeniji su trščaci i zajednice visokih
            šaševa, koje pružaju tipičan ritski ugođaj. Popis flore za područje
            Parka prirode sadrži više od 500 biljnih vrsta prema dosadašnjim
            istraživanjima.
          </p>
          <img src={BiljniSvijet} alt="" />
        </div>
        <h1>Životinjski svijet</h1>
        <div className="životinjskiSvijet">
          <p>
            Faunu sisavaca Kopačkoga rita prema dosadašnjim istraživanjima čini
            55 vrsta, što je više od polovice ukupnoga broja vrsta sisavaca u
            fauni Hrvatske. Nepregledni trščaci, bare, poplavne šume, vlažne
            livade pružaju optimalne životne uvjete mnogim sisavcima poput
            običnoga jelena, obične srne, divlje svinje, divlje mačke, vidre,
            dabra, jazavca. Park prirode Kopački rit nadaleko je poznat po
            ptičjoj populaciji. U njemu obitava čak 300 različitih vrsta ptica,
            što čini 80% vrsta zabilježenih u ornitofauni Hrvatske. Od toga
            broja više od 140 vrsta redovite su ili povremene gnjezdarice.
            Posebno su zanimljive vrste koje se gnijezde u velikim kolonijama,
            poput sive čaplje, bjelobrade čigre, velikoga vranca, riječnoga
            galeba. Tijekom proljetne i jesenske selidbe Kopački je rit važno
            odmorište brojnim pticama močvaricama. Na području Kopačkoga rita
            gnijezdi se najveća populacija štekavca u cijelome porječju Dunava;
            simbol je Parka prirode. Veliki vranac kolonijalna je gnjezdarica u
            Ritu i veliki ljubitelj ribe.
          </p>
          <img src={životinjskiSvijet} alt="" />
        </div>
        <h1>Povijest parka</h1>
        <div className="povijestParka">
          <p>
            Darovnicom hrvatsko-ugarskoga kralja Leopolda I. iz 1699. godine,
            princ i vojskovođa Eugen Savojski postaje posjednik vlastelinstva
            Belje koje je obuhvaćalo i Kopački rit; izgradio je lovački dvorac u
            Bilju. Kompleks dvoraca Tikveš obuhvaća rezidencijalne objekte
            ladanjske arhitekture iz 19. stoljeća koje su izgradili članovi
            Teschenske loze obitelji Habsburg u prostoru šuma i perivoja u srcu
            Baranje. Tijekom povijesti bili su lovačko središte poznato u
            europskim i svjetskim razmjerima, no zatvorenoga tipa – za vladare i
            goste Dvora. Fotografije motiva iz Kopačkoga rita koje je snimila
            nadvojvotkinja Isabella von Habsburg bile su objavljene u poznatijim
            časopisima toga doba.
          </p>
          <img src={PovijestParka} alt="" />
        </div>
        <h1>Kompleks dvorca Tikveš</h1>
        <div className="Tikveš">
          <p>
            U pitoresknom ravničarskom krajoliku Baranje, u njegovom središnjem
            dijelu koji je danas obuhvaćen Parkom prirode Kopački rit, smjestio
            se romantičarski arhitektonski sklop ladanjske arhitekture –
            Kompleks dvorca Tikveš. To je prostor šuma i perivoja unutar kojega
            su smješteni rezidencijalni objekti: Novi dvorac s aneksom,
            Ladanjska vila, mali sakralni objekt (Kapela papinskog blagoslova)
            te prateći objekti s restoranom. Povijest ovog područja povezana je
            s upravljanjem i gospodarenjem prirodnim resursima toga područja o
            čemu postoji povijesna dokumentacija još od 1697. godine kada je
            posjed za iskazane zasluge dodijeljen princu Eugenu Savojskom od
            cara Leopolda I. Sam kompleks dvorca datira iz 19. stoljeća, a
            izgradili su ga članovi Teschenske loze obitelji Habsburg. Tijekom
            povijesti dvorac je bio rezidencijalno lovačko središte poznato u
            europskim i svjetskim razmjerima, ali isključivo zatvorenog tipa za
            goste dvora i vladare.
          </p>
          <img src={Tikveš} alt="" />
        </div>
          </div>
  );
}

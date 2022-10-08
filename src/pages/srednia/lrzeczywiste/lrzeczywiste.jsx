import React from 'react'
import styles from './lrzeczywiste.module.scss';
import TopNavi from 'components/topNavi/topNavi';
import LeftNavi from 'components/leftNavi/leftNavi';

const Lrzeczywiste = () => {
    const { mainDiv, basic, tasks, tytul, podmenu } = styles
    return (
        <div className={mainDiv}>
            <TopNavi model="b" /> {/* a - podstawówka, b- średnia, c- matura, d- studia*/}
            <div className={basic} >
                <LeftNavi model="b" />
                <div className={tasks}>
                    <h2 className={tytul}>Liczby rzeczywiste </h2>
                    <ul className={podmenu}>
                        <li><button>Liczby naturalne</button></li>
                        <li><button>Liczby całkowite. Liczby wymierne</button></li>
                        <li><button>Liczby niewymierne</button></li>
                        <li><button>Rozwinięcie dziesiętne liczby rzeczywistej</button></li>
                        <li><button>Pierwiastek kwadratowy</button></li>
                        <li><button>Pierwiastek sześcienny</button></li>
                        <li><button>Potęga o wykładniku całkowitym</button></li>
                        <li><button>Notacja wykładnicza</button></li>
                        <li><button>Potęga o wykładniku wymiernym</button></li>
                        <li><button>Logarytm i jego własności</button></li>
                        <li><button>Procenty</button></li>
                        <li><button>Powtórzenie</button></li>
                        <li><button>Zadania testowe</button></li>
                        <li><button>To było na maturze</button></li>
                    </ul>
                </div>

            </div>
        </div>

    )
}

export default Lrzeczywiste
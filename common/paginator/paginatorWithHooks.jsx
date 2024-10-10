import React, { useState } from "react";
import css from './paginatorWithHooks.module.css'
import classNames from "classnames";

const PaginatorWithHooks = ({ currentPage, totalItemsCount, pageSize, portionSize = 10, onPageChange }) => {

    // код Димыча
    let pageCount = Math.ceil(totalItemsCount / pageSize); // количество страниц всего (267)

    let pages = [];
    for (let i = 1; i <= pageCount; i += 1) {
        pages.push(i);
    }

    let portionCount = Math.ceil(pageCount / portionSize);

    let [portionNumber, setPortionNumber] = useState(1);

    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1;
    let rightPortionPageNumber = portionNumber * portionSize;

    return (
        <div className={css.pages}>
            {portionNumber > 1 &&
                <button onClick={() => { setPortionNumber(portionNumber - 1) }}>PREV</button>}

            {pages
                .filter(page => page >= leftPortionPageNumber && page <= rightPortionPageNumber)
                .map((page) => {
                    return <span className={classNames({
                        [css.selected]: currentPage === page
                    }, css.pageNumber)}
                        key={page}
                        onClick={() => { onPageChange(page) }}>{page}</span>
                })
            }
            {portionCount > portionNumber &&
                <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button>
            }
        </div>
    )

    // МОЙ КОД
    // let pageCount = Math.ceil(totalItemsCount / pageSize); // количество страниц всего (267)
    // let controlPage = pageCount - (pageCount % portionSize); //номер контрольной страницы, после кот отрисовывается остаток страниц (200)

    // let [leftBorder, setLeftBorder] = useState(1);
    // let [rightBorder, setRightBorder] = useState(portionSize)

    // let pages = [];
    // for (let i = leftBorder; i <= rightBorder; i += 1) {
    //     pages.push(i);
    // }

    // const handleClickForward = () => {

    //     if (rightBorder === (controlPage)) { //200
    //         setLeftBorder(controlPage + 1)   //201
    //         setRightBorder(pageCount)        //267
    //         onPageChange(controlPage + 1)    //201
    //     }

    //     if (rightBorder <= (controlPage - portionSize)) { //100
    //         setLeftBorder(leftBorder + portionSize);      //101
    //         setRightBorder(rightBorder + portionSize);    //200
    //         onPageChange(leftBorder + portionSize);       //101
    //     }
    // }

    // const handleClickBack = () => {
    //     if (rightBorder === (pageCount)) {
    //         setRightBorder(controlPage);
    //         setLeftBorder(controlPage - portionSize + 1);
    //         onPageChange(controlPage - portionSize + 1)
    //     }
    //     if (rightBorder <= controlPage) {
    //         setRightBorder(rightBorder - portionSize);
    //         setLeftBorder(leftBorder - portionSize);
    //         onPageChange(leftBorder - portionSize);
    //     }
    // }

    // return (
    //     <div>
    //         {rightBorder > portionSize && <button className={css.button} onClick={() => handleClickBack()}>назад</button>}

    //         <div className={css.pages}>
    //             {pages.map(page => {
    //                 return (

    //                     <span key={page} className={classNames(css.pageNumber,
    //                         { [css.selected]: currentPage === page })}

    //                         onClick={() => onPageChange(page)}>{page}</span>
    //                 )
    //             })}
    //         </div>

    //         {rightBorder < (controlPage + 1) && <button className={css.button} onClick={() => handleClickForward()}>вперед</button>}
    //     </div>
    // )
}

export default PaginatorWithHooks;


import { useContext, useEffect } from "react";

import { SortingContext } from "../contexts/SortingContext";
import algorithmInfos from "../data/algorithmInfos";

function SortingChart() {
    const { sortingState, generateSortingArray, startVisualizing, changeSortingSpeed, changeAlgorithm } = useContext(SortingContext);

    useEffect(() => {
        generateSortingArray();
    }, []);

    return (
        <div className="mt-4 mb-4 flex flex-col items-center">
            {/* <img src="/logo.png" className="max-w-lg mb-6 w-full" /> */}
            <h1 className="text-6xl mb-5 font-extrabold bg-gradient-to-r from-gray-200 to-gray-700 text-transparent bg-clip-text">SortNova</h1>

            
            <div className="flex flex-wrap justify-center gap-3 mb-6">
                <button
                    onClick={() => changeAlgorithm("bubble_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "bubble_sort" ? "bg-light" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Bubble Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("insertion_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "insertion_sort" ? "bg-light" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Insertion Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("selection_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "selection_sort" ? "bg-light" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Selection Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("merge_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "merge_sort" ? "bg-light" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Merge Sort
                </button>
                <button
                    onClick={() => changeAlgorithm("quick_sort")}
                    className={`bg-carbon text-white px-5 py-3 rounded-3xl ${
                        sortingState.algorithm === "quick_sort" ? "bg-light" : "hover:bg-carbon-light"
                    } transition-all`}
                >
                    Quick Sort
                </button>
               
            </div>

            <div className="max-w-3xl w-full">
                <div className="mb-4 chart-container">
                    {sortingState.array.map((bar, i) => (
                        <div key={i} className="bar-container">
                            <div className={`select-none bar bar-${bar.state}`} style={{ height: `${Math.floor((bar.value / 1000) * 100)}%` }}>
                                <p className={`pl-1.5 ${bar.state === "idle" ? "text-[#B1D2CF]" : "text-[#D8B7BE]"}`}>{bar.value}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="flex items-center gap-4 max-w-3xl mb-8">
                    <button disabled={sortingState.sorting} onClick={startVisualizing} className="px-4 py-2 push-btn text-white-light disabled:brightness-75">
                        Start
                    </button>
                    <button disabled={sortingState.sorting} onClick={() => generateSortingArray()} className="text-white-light disabled:brightness-75">
                        New Array
                    </button>
                    <select
                        disabled={sortingState.sorting}
                        onChange={changeSortingSpeed}
                        defaultValue="slow"
                        className="ml-auto bg-light px-2 py-2 rounded-md cursor-pointer outline-none focus:ring ring-light disabled:brightness-75 disabled:cursor-default"
                    >
                        <option value="slow">Slow</option>
                        <option value="normal">Normal</option>
                        <option value="fast">Fast</option>
                    </select>
                </div>

                <div className="w-full h-0.5 bg-carbon-light mb-4" />
               
            </div>
        </div>
    );
}

export default SortingChart;

import SearchResultsItemView from "./SearchResultsItemView";

export default function SearchResultsView({ results, sortResults }) {
    return (
        <div>
            <div>
                <label htmlFor="sort" className="block text-sm font-medium text-gray-700">Sort</label>
                <select id="sort" name="sort" className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" onChange={e => sortResults(e)}>
                    <option hidden disabled selected value> -- select an option -- </option>
                    <option value={['price', 'asc']}>Price ASC</option>
                    <option value={['price', 'desc']}>Price DESC</option>
                    <option value={['long_stock', 'asc']}>Stock ASC</option>
                    <option value={['long_stock', 'desc']}>Stock DESC</option>
                </select>
            </div>
            <div className="p-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-5 gap-2">
                {results.map((result) => <SearchResultsItemView key={result.id} result={result} />)}
            </div>
        </div>
    );
}
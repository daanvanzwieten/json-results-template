function SearchResultsItemView({ result }) {
    return (
        <div className="flex flex-col justify-between p-4 max-w-sm rounded overflow-hidden shadow-lg" data-id={result.id}>
            <img className="w-full" alt={result.title} src={result.image} />
            <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2">{result.title}</div>
                <p className="text-gray-700 text-base">{result.promoline}</p>
                <div className="font-bold text-2xl mt-3">€ {result.price}</div>
            </div>
            <a className="inline-flex flex-none items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" href={result.detail_url}>Meer informatie</a>
        </div>
    );
}

export default SearchResultsItemView;
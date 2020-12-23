export const getResults=async(search)=>{
    const url=`https://apitestsearch.herokuapp.com/busqueda?criterio=${search}`
    const resp=await fetch(url);
    const {data}=await resp.json();
    const {soapdemo,tvmaze,itunes}=data;
    const tvmazeFormatter=tvmaze?.map(tvshow=>{
        return{
            id:tvshow.show.id,
            name:tvshow.show.name,
            image:tvshow.show.image?.original,
            dir:tvshow.show.network?.country.name,
            other:tvshow.show.language,
        }
    })
    const itunesFormatter=itunes?.map(multimedia=>{
        return{
            id:multimedia.trackId,
            name:multimedia.trackName,
            image:multimedia.artworkUrl100.replace("100x100bb", "300x1000bb"),
            dir:multimedia.country,
            other:multimedia.shortDescription
        }
    })
    const soapFormmater=soapdemo?.map(person=>{
        return {
            id:person.ID,
            name:person.Name,
            dir:person.DOB,
            other:person.SSN
        }
    })
    const results={
        tvmaze:tvmazeFormatter?tvmazeFormatter:[],
        itunes:itunesFormatter?itunesFormatter:[],
        soap:soapFormmater?soapFormmater:[]
    }
    
    return results;
}
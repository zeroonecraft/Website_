async function getRequest(){
    const link = document.getElementById("url").value;
    const jenis = document.getElementById("tipe").value;

    //const baseURL = "https://api.binderbyte.com/v1/track?api_key=7cf7a054e04466fe6a8114da4badecefb7de09a32e89485492ebe412aea6f97e";
    //const response = await fetch(baseURL + "&courier=" + courier + "&awb=" + receipt, {method: "GET"})
    const baseURL = "https://ancient-dew-2472.fly.dev/api?url";
    const response = await fetch(jenis + link, {method: "GET"})
    const json = await response.json();
    return json;
}

async function tracking(){
    const json = await getRequest();

    if(json.data.success == true){
        let informasiHTML = `
        <div class="grid row-gap-8 lg:grid-cols-4">
            <div class="grid lg:col-span-2">
                <div>
                    <p class="mb-10 sm:text-2xl text-xl font-bold">Informasi</p>
                </div>
            </div>
            <div class="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                <div class="flex flex-col justify-between sm:p-8 p-6">
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Linkvertise Input</p>
                        <p class="sm:text-base text-sm" id="inputlink">${json.data.inputlink}</p>
                    </div>
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Linkvertise Destination</p>
                        <p class="sm:text-base text-sm" id="hasil">${json.data.bypassedlink}</p>
                    </div>
                </div>
            </div>
        </div>`;

        /*let detailHTML = `
        <div class="grid row-gap-8 lg:grid-cols-4">
            <div class="grid lg:col-span-2">
                <div>
                    <p class="mb-10 sm:text-2xl text-xl font-bold">Detail</p>
                </div>
            </div>
            <div class="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                <div class="flex flex-col justify-between sm:p-8 p-6">
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Asal</p>
                        <p class="sm:text-base text-sm" id="asal">${json.data.detail.origin}</p>
                    </div>
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Tujuan</p>
                        <p class="sm:text-base text-sm" id="tujuan">${json.data.detail.destination}</p>
                    </div>
                </div>
                <div class="flex flex-col justify-between sm:p-8 p-6">
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Pengirim</p>
                        <p class="sm:text-base text-sm" id="pengirim">${json.data.detail.shipper}</p>
                    </div>
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Penerima</p>
                        <p class="sm:text-base text-sm" id="penerima">${json.data.detail.receiver}</p>
                    </div>
                </div>
            </div>
        </div>`;

        let segmentHTML = '';
        let riwayatHTML = ` <div class="grid row-gap-8 lg:grid-cols-2 ">
                                <div class="grid lg:col-span-1">
                                    <div>
                                        <p class="mb-10 sm:text-2xl text-xl font-bold">Riwayat</p>
                                    </div>
                                </div>
                                <div>`;

        for(i = json.data.history.length-1; i >= 1; i--){        
            segmentHTML = `     <div class="flex">
                                    <div class="flex flex-col items-center mr-4 ">
                                        <div>
                                            <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                                                <svg class="w-4 text-gray-600" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" viewBox="0 0 24 24">
                                                <line fill="none" stroke-miterlimit="10" x1="12" y1="2" x2="12" y2="22"></line>
                                                <polyline fill="none" stroke-miterlimit="10" points="19,15 12,22 5,15"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                        <div class="w-px h-full bg-gray-300">
                                        </div>
                                    </div>
                                    <div class="pt-1 sm:pt-1 p-6 sm:p-8">
                                        <p class="mb-2 text-base sm:text-lg font-bold">${json.data.history[i].desc}</p>
                                        <p class="text-gray-700 sm:text-base text-sm">${json.data.history[i].date}</p>
                                    </div>
                                </div>`;

            riwayatHTML += segmentHTML;
        }

        for(i = 0; i >= 0; i--){        
            segmentHTML = `     <div class="flex">
                                    <div class="flex flex-col items-center mr-4 ">
                                        <div>
                                            <div class="flex items-center justify-center w-10 h-10 border rounded-full">
                                                <svg class="w-6 text-gray-600" stroke="currentColor" viewBox="0 0 24 24">
                                                <polyline fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="6,12 10,16 18,8"></polyline>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="pt-1 sm:pt-1 p-6 sm:p-8">
                                        <p class="mb-2 text-base sm:text-lg font-bold">${json.data.history[i].desc}</p>
                                        <p class="text-gray-700 sm:text-base text-sm">${json.data.history[i].date}</p>
                                    </div>
                                </div>`;

            riwayatHTML += segmentHTML;
        }


        riwayatHTML += `    </div>
                        </div>`;*/

        //detail.innerHTML = detailHTML;
        informasi.innerHTML = informasiHTML;
        //riwayat.innerHTML = riwayatHTML;

    }else{
        let informasiHTML = `
        <div class="grid row-gap-8 lg:grid-cols-4">
            <div class="grid lg:col-span-2">
                <div>
                    <p class="mb-10 text-2xl font-bold">Informasi</p>
                </div>
            </div>
            <div class="grid border divide-y rounded-lg lg:col-span-2 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
                <div class="flex flex-col justify-between sm:p-8 p-6">
                    <div>
                        <p class="text-base font-semibold text-gray-800 sm:text-lg">Linkvertise</p>
                        <p class="sm:text-base text-sm" id="not-found">Tidak Ditemukan</p>
                    </div>
                </div>
            </div>
        </div>`;

        //let detailHTML = '';
        //let riwayatHTML = '';

        informasi.innerHTML = informasiHTML;
        //detail.innerHTML = detailHTML;
        //riwayat.innerHTML = riwayatHTML;
    }
}
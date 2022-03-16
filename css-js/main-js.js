var nhanVien = [{
        id: 1,
        name: 'A',
        sdt: 0
    },

    {
        id: 2,
        name: 'B',
        sdt: 0
    },

    {
        id: 3,
        name: 'C',
        sdt: 1
    },

    {
        id: 4,
        name: 'D',
        sdt: 0
    }
];


// nhanVien.forEach(function(nv, index) {
//     console.log(index, nv);
// });

var isFree = nhanVien.every(function(nv, index) {
    console.log(index);
    return nv.sdt === 0;
});
console.log(isFree);
// total sam, tle

const isValid = (original) => {
    const copy = [...original];
    let validAcs = true;
    let validDesc = true;
    copy.sort((a, b) => a - b);
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] !== original[i]) {
            validAcs = false;
        }
    }
    copy.sort((a, b) => b - a);
    for (let i = 0; i < copy.length; i++) {
        if (copy[i] !== original[i]) {
            validDesc = false;
        }
    }
    return validAcs || validDesc;
}

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
    const cur = []

    const dfs = (i) => {
        if (cur.length === 3) {
            return isValid(cur) ? 1 : 0;
        }
        if (i === rating.length) return 0;

        cur.push(rating[i]);
        let res = 0;
        res += dfs(i + 1);
        cur.pop()
        res += dfs(i + 1);
        return res
    }

    return dfs(0);
};

console.log(numTeams([42434,55203,69272,2918,75611,94661,87110,10003,14871,28554,78247,55723,61638,40785,52890,26593,57362,62631,96182,37751,91167,45593,55695,67993,74888,54640,9757,46177,83195,90389,36916,67945,88464,29896,59042,74685,39768,97442,48704,57712,47047,81770,61529,41797,55365,52384,13296,1049,42299,9086,94416,72578,72053,6959,73166,75109,33647,35857,13334,23828,19719,93436,58715,94445,603,15794,91004,48684,44009,26628,24527,46184,32116,89060,98608,43489,26503,6165,40342,91069,72273,68801,67125,92132,43879,61886,49516,12851,26666,21757,20702,32781,34297,64293,67214,68704,2083,46924,38071,20005,22222,17641,83108,78818,70916,86319,62954,90981,28776,88887,31572,81667,70022,94987,65295,63195,77768,16091,96332,43818,31529,40231,69578,90533,22832,59016,33967,7344,58372,16881,96258,84350,46645,85293,92823,97059,56119,64916,81187,34284,22142,32324,90281,5034,64704,8043,39391,20923,19868,70592,31938,41031,92703,88316,11953,27340,36549,62627,94861,7415,87358,84657,89211,16101,34697,51495,14628,81721,22502,26139,43535,43388,24633,44962,47900]))
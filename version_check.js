var version_check = function (check, from, to, boundry) {
    boundry = (typeof boundry === 'undefined') ? true : boundry;
    from =from || '0';
    var result;
    if (boundry) {
        result = (compare(from, check) <= 0);
        if (!(typeof to === 'undefined')) {
            result = result && (compare(check, to) <= 0)
        }

    } else {
        result = (compare(from, check) < 0);
        if (!(typeof to === 'undefined')) {
            result = result && (compare(check, to) < 0)
        }

    }
    return result;

    function compare(v1, v2) {

        var v1parts = v1.split('.');
        var v2parts = v2.split('.');
        for (var i = 0; i < v1parts.length; ++i) {
            if (v2parts.length == i) {
                if (check_for_zeros(v1parts, i)) {
                    return 0;
                } else {
                    return 1;
                }
            }
            if (v1parts[i] == v2parts[i]) {
                continue;
            } else {

                var v1txt = v1parts[i].match(/[a-z]*$/);
                var v2txt = v2parts[i].match(/[a-z]*$/);
                v2parts[i] = v2parts[i].match(/^[0-9]*/);
                v1parts[i] = v1parts[i].match(/^[0-9]*/);
                var length = v1parts[i].length - v2parts[i].length;

                if (length > 0) {
                    v2parts[i] = pad_with_zeroes(v2parts[i], length);
                } else {
                    v1parts[i] = pad_with_zeroes(v1parts[i], -length);
                }

                if (v1parts[i] > v2parts[i]) {
                    return 1;
                } else if (v2parts[i] > v1parts[i]) {
                    return -1;
                } else if (v1txt != '' && v2txt != '') {
                    if (v1txt < v2txt) {
                        return -1;
                    } else if (v1txt > v2txt) {
                        return 1;
                    }
                } else if (v1txt!=''){
                    return -1;
                } else if (v2txt!=''){
                    return 1;
                }

            }
        }

        if (v1parts.length != v2parts.length) {
            if (check_for_zeros(v2parts, i)) {
                return 0;
            } else {
                return -1;
            }
        }

        return 0;
    }

    function pad_with_zeroes(my_string, length) {
        while (length--) {
            my_string = '0' + my_string;
        }
        return my_string;
    }
    function check_for_zeros(v_array, i) {
        var boolean = true;
        while (i < v_array.length) {
            boolean = boolean && (/^[0]+$/.test(v_array[i]));
            i++;
        }
        return boolean;
    }
}
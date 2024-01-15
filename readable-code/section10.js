// 与えられた緯度経度に最も近いarrayの要素を返す
// 地球が完全な球体であることを前提としている
const findClosestLocation = (lat, lng, array) => {
    let closest
    const closest_dist = Number.MAX_VALUE
    for (let i = 0; i< array.length; i++) {
        const dist = spherical_distance(lat, lng, array[i].latitude, array[i].longitude)
        if (dist < closest_dist) {
            closest = array[i]
            closest_dist = dist
        }
    }
    return closest
}

// 球面距離の算出
const spherical_distance = (lat1, lng1, lat2, lng2) => {
    // 2つの地点をラジアンに変換する
    const lat_rad = radians(lat1)
    const lng_rad = radians(lng1)
    const lat2_rad = radians(lat2)
    const lng2_rad = radians(lng2)
    
    // 球面三角法の第二余弦定理の公式を使う
    return Mat.acos(Math.sin(lat_rad) * Math.sin(lat2_rad) + Math.cos(lat_rad) * Math.cos(lat2_rad) * Math.cos(lng2_rad - lng_rad))
}
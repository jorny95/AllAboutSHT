let query = "SELECT CASE WHEN (residential_area1 = '경기도') THEN (CASE WHEN (A.residential_area2 =A.db_location AND A.period <= A.term) THEN A.applicable+A.inapplicable+A.etc WHEN (A.location = '인천' OR A.location = '서울') THEN A.etc ELSE A.inapplicable+A.etc END) ELSE ( CASE WHEN (A.residential_area1 = A.location AND A.period <= A.term) THEN A.applicable+A.inapplicable+A.etc ELSE A.inapplicable+A.etc END) END AS apply_type FROM ( SELECT residential_area1, residential_area2, support_area, period, applicable, inapplicable, etc, '경기' AS location, '성남시' AS db_location, '동작구수방사' AS apply, 24 AS term FROM apply_alert1 WHERE support_area = '동작구수방사') AS A"
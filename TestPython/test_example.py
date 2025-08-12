from example import suma
def test_suma():
    assert suma(1,2)==3
    assert suma(-1,1)==0
    assert suma(0,0)==0
    
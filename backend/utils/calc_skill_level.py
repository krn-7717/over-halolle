from math import ceil
from math import log
from math import sqrt

def calc_skill_level(understanding, confidence, isTutorial=False, isUse=False, isDevelop=False):
    if isDevelop:
        if confidence >= 60:
            # 70 <= level <= 100
            def reverse_function(y):
                return ceil((6 / 125) * (y - 60) * (y - 60) + 70)
            level = reverse_function(confidence)
            return level
        else:
            # 35 <= level <= 70
            def reverse_function(y):
                return ceil((y - 25) * (y - 25) / 35 + 35)
            
            if confidence < 25:
                confidence = 25
            
            level = reverse_function(confidence)
            return level
    elif isUse:
        # 15 <= level <= 35
        def function(y):
            return ceil(4 * sqrt((1 / 3) * (100 - y)) + 15)
        
        if confidence < 26:
            confidence = 25
        
        level = function(confidence)
        return level
        
    elif isTutorial:
        # 0 <= level <= 15
        def function(y):
            return ceil(- (3 / 2) * sqrt(100 - y) + 15)
        
        level = function(confidence)
        return level

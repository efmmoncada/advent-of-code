with open('calories.txt', 'r') as f:
    calorieArr = sorted([sum(map(lambda s: int(s), string.split('\n'))) for string in f.read().split('\n\n')], reverse=True)

    print(f"Part 1: {calorieArr[0]}", f"Part 2: {sum(calorieArr[:3])}")

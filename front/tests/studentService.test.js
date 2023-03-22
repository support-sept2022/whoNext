  import { getData } from '../src/services/studentService';

  describe('StudentService', () => {
    beforeEach(() => {
      jest.resetAllMocks();
    });

    it('should return students', async () => {
      const mockData = [{ id: 1, name: 'John' }, { id: 2, name: 'Jane' }, { id: 3, name: 'Bob' }];

      global.fetch = jest.fn(() =>
          Promise.resolve({
            text: () => Promise.resolve(JSON.stringify(mockData)),
          })
      );

      const students = await getData();

      expect(students).toEqual(mockData);
    });
  });

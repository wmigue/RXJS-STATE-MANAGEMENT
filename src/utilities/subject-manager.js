import { BehaviorSubject, Subject } from 'rxjs'

export class SubjectManager {

  initialValuesSubjectCounter = {
    counterClicks: 0,
    comentario: 'test de rxjs',
    otrocomentario: 'wmigue@gmail.com'
  }

  subjectModal$ = new Subject()
  subjectCounter$ = new BehaviorSubject(this.initialValuesSubjectCounter)
 
  constructor(){}

  getSubjectModal() {
    return this.subjectModal$.asObservable()
  }

  setSubjectModal(value) {
    this.subjectModal$.next(value)
  }

  getSubjectCounter() {
    return this.subjectCounter$.asObservable()
  }

  setSubjectCounter() {
    const count = this.subjectCounter$.value.counterClicks + 1
    this.subjectCounter$.next({...this.subjectCounter$.value, counterClicks:count})
  }
}

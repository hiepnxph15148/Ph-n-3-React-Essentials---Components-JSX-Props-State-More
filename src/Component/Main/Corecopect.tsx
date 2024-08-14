import React from 'react'
import { CORE_CONCEPTS } from '../../data'
import CoreContempt from './CoreContempt'

type Props = {}

const Corecopect = (props: Props) => {
  return (
    <>
      <selection id="core-concepts">
            <ul>
              {CORE_CONCEPTS.map((concept, index) => (
                <CoreContempt key={index} {...concept} />
              ))}
            </ul>
          </selection>
    </>
  )
}

export default Corecopect
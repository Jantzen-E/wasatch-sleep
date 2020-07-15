import React from 'react';
import Footer from './Footer';

class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="servicesPage">
                <h2>Services</h2>
                <h4>Sleep Medicine</h4>
                <p>	
                    The Wasatch Sleep Health Center is a private clinic directed by a sleep medicine specialist.  
                    Unlike many laboratories in the Salt Lake valley, the Wasatch Sleep Health Center adheres to the 
                    practice of meeting and evaluating each patient in the clinic before and after overnight testing.  
                    University centers have found "face-to-face" review of the study data with the Sleep physician 
                    improves therapy compliance.  This also allows for evaluation and treatment of often co-morbid 
                    (two or more) sleep disorders.  Few physicians in Salt Lake City  have specialized training in 
                    sleep disorders.  In fact, most receive no more than one hour of sleep medicine training in medical 
                    school.
                </p>
                <p>
                    Interpreting sleep studies requires extensive knowledge of brain waves and sleep staging.  Our 
                    current understanding of the pathology of many sleep disorders suggests it’s the brains response 
                    to breathing resistance that causes the problem.  The staging of sleep is also done by interpreting 
                    the brain waves.  It makes sense to have a neurologist (a brain doctor) interpret and explain the 
                    results of your test.  Therefore, a trained doctor should review the brain waves; unfortuantely, 
                    technicians "alone" fill that role in other labs. 
                </p>
                <p>
                    What separates the Wasatch Sleep Health Center from other facilities is our ability to sit down with 
                    the patient and describe in detail the findings of their sleep study.  Knowing the medical history 
                    of the patient before he or she arrives for the sleep study allows for a more detailed and exact 
                    interpretation of the data.  We will coach you through the whole process and continue to follow with 
                    you for years to come.  Like many chronic medical conditions it is important to follow with a doctor 
                    who is familiar with your history and is willing to visit with you as often as needed.
                </p>
                <p>
                    Dr. David S. Peterson is the medical director of the Wasatch Sleep Health Center.  Dr. Peterson 
                    is originally from San Diego.  He earned his Doctor of Medicine at the University of Utah school 
                    of medicine.  After completing a residency in neurology he completed a fellowship in sleep medicine 
                    under the direction of both the pulmonary and neurology departments at the University of Utah Sleep 
                    Center. He has treated many patients with varying sleep disorders including:
                </p>
                <ul className="services">
                    <li>Insomnia</li>
                    <li>Obstructive Sleep Apnea</li>
                    <li>Central Sleep Apnea</li>
                    <li>Circadian Rhythm Disorders</li>
                    <li>Narcolepsy</li>
                    <li>Shift Work</li>
                    <li>Restless Leg Syndrome</li>
                    <li>Periodic Limb Movement Disorder</li>
                    <li>Sleep walking, talking and wandering</li>
                    <li>REM Sleep Behavior Disorder</li>
                    <li>And many others.</li>
                </ul>
                <h4>Neurology</h4>
                <p>
                    Dr. Peterson has had highly specialized training and use advanced technologies and the latest 
                    medications to treat a full range of neurological conditions including:
                </p>
                <ul className="services">
                    <li>Cerebrovascular diseases</li>
                    <li>Neuromuscular diseases</li>
                    <li>Neurobehavior and memory disorders</li>
                    <li>Neuroimmunology and multiple sclerosis</li>
                    <li>Migraines & headaches</li>
                    <li>Movement disorders (Parkinson's)</li>
                    <li>Epilepsy & seizures</li>
                    <li>Brain tumors and spine injuries</li>
                </ul>
                <p>
                    Symptoms that are common to most neurological conditions include differences in speech patterns, 
                    loss of balance and coordination, numbness in a single extremity, weakness, memory loss, difficulty 
                    moving, tremors, rigid muscles and difficulty swallowing.  
                </p>
                <p>
                    If there is a concern that you or your loved one has a sleep disorder, follow the contact-us link and 
                    submit your name and phone number.  Our receptionist will give you a call to schedule a clinic 
                    visit.  
                </p>
                <br/>
                <br/>
                <div>
                    <Footer />
                </div>
            </div>
        )
    }
}

export default Services;